import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MpublicacionesService } from 'src/app/services/mpublicaciones.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mostrar-publicacion',
  templateUrl: './mostrar-publicacion.page.html',
  styleUrls: ['./mostrar-publicacion.page.scss'],
})
export class MostrarPublicacionPage implements OnInit {
  publication : any; 
  constructor(
    
    public navCtrl:NavController,
    public _MpublicacionService: MpublicacionesService,
    private loginService: LoginService,
    private router: Router,
  ) { 
    this.loginService.menu = true;
    this.publication = [];
  }

  ngOnInit() {
   this.publicacionService();
  }
  publicacionService() {
    let token = localStorage.getItem('token');
    this._MpublicacionService.getList(token).subscribe(res => {
      console.log(res['response']);
      this.publication = res['response'];
    })

  }

}
