import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import {  Publicaciones } from '../models/usuario.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicacionesService} from  'src/app/services/publicaciones.service'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-crear-publicaciones',
  templateUrl: './crear-publicaciones.page.html',
  styleUrls: ['./crear-publicaciones.page.scss'],
})
export class CrearPublicacionesPage{
  todo:FormGroup;
  customDayShortNames: any

  constructor(
    public alertController: AlertController,
    private formBuilder: FormBuilder,
    private _publicacionService: PublicacionesService,
    private router: Router,
    private loginService: LoginService,
    private loading: LoadingController) {
      this.loginService.menu = true;
      console.log(loginService.menu);
      this.todo = new FormGroup({

        nombrePaciente: new FormControl('', Validators.required),
        apellidoPaciente: new FormControl('', Validators.required),
        idHospital: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
        tipoDeSangre: new FormControl('', Validators.required),
        fecha: new FormControl('', Validators.required),
        ciudad: new FormControl('', Validators.required),
       });
     }
  async publicar(){
    let token = localStorage.getItem('token');
    console.log(token);
    console.log('voy iniciando bby');
    const loading = await this.loading.create({
      message: 'Publicando',
    });
    let user = new Publicaciones(
      this.todo.value.nombrePaciente,
      this.todo.value.apellidoPaciente,
      this.todo.value.idHospital,
      this.todo.value.estado,
      this.todo.value.ciudad,
      this.todo.value.fecha,
      this.todo.value.tipoDeSangre,
    );
    await loading.present().then(()=>{
      this._publicacionService.publicar(user,token)
        .subscribe(()=>{
          loading.dismiss();
          this.router.navigateByUrl('mostrar-publicacion');
        },err=>{
          loading.dismiss();
          return;
        });
  });
}
}
