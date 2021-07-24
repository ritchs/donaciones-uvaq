import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsuarioRegistro } from '../models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage{
  todo : FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private _registroService: RegistroService,
    private router: Router,
    private loginService: LoginService,
    private loading: LoadingController ) {
      this.loginService.menu = false;
      console.log(loginService.menu);
      this.todo = new FormGroup({
        nombre: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])),
        pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
        tipoDeSangre: new FormControl('', Validators.required),
        peso: new FormControl('', Validators.required),
        mayorDeEdad: new FormControl('', Validators.required),
        tipoDeDonador: new FormControl('', Validators.required),
       });
     }
  async registrar(){
    const loading = await this.loading.create({
      message: 'Registrando',
    });
    let user = new UsuarioRegistro(
      this.todo.value.nombre,
      this.todo.value.apellidos,
      this.todo.value.email,
      this.todo.value.pass,
      this.todo.value.tipoDeSangre,
      this.todo.value.peso,
      this.todo.value.mayorDeEdad,
      this.todo.value.tipoDeDonador,
    );
    await loading.present().then(()=>{
      this._registroService.registrar(user)
        .subscribe(()=>{
          loading.dismiss();
          this.router.navigateByUrl('login');
        },err=>{
          loading.dismiss();
          return;
        });
    });

}
}
