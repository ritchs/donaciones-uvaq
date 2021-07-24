import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 public user;
  constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.menu = true;
    console.log(_loginService.menu);
   }

  ngOnInit() {
    this.loginService();
  }
  loginService() {
    let token = localStorage.getItem('token');
    
    let usr = {
      nombre: localStorage.getItem('nombre'),
      tipoDonador: localStorage.getItem('tipoDonador'),
      tipoSangre: localStorage.getItem('tipoSangre'),
      peso: localStorage.getItem('peso'),
    }
    this.user = usr;
    
    console.log('User: ', this.user);

  }

}
