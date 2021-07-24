import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class FormsPage {
  todo : FormGroup;

  constructor(
     private formBuilder: FormBuilder,
     private _loginService: LoginService,
     private router: Router,
     private loginService: LoginService,
     private loading: LoadingController ) {
      this.loginService.menu = false;
      console.log(loginService.menu);
   
   this.todo = new FormGroup({
      email: new FormControl('', Validators.required),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  
  async login(){
    const loading = await this.loading.create({
      message: 'Iniciando Sesión',
    });
    
   
    let user = new Usuario(
      this.todo.value.email,
      this.todo.value.pass
    );
    await loading.present().then(()=>{
      this._loginService.login(user)
        .subscribe(()=>{
          loading.dismiss();
          this.router.navigateByUrl('mostrar-hospital');
        },err=>{
          loading.dismiss();
          return;
        });
    });
    
  }
}
