import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import {HopitalesService} from 'src/app/services/hopitales.service'
import { NavController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-mostrar-hospital',
  templateUrl: './mostrar-hospital.page.html',
  styleUrls: ['./mostrar-hospital.page.scss'],
})
export class MostrarHospitalPage implements OnInit {
  hospitales : any;
  constructor(
    public navCtrl:NavController,
    private loginService: LoginService,
    public _hospitalService: HopitalesService,
    private router: Router,
  ) {
    this.loginService.menu = true;
    console.log(loginService.menu);
    this.hospitales = [];
  }

  ngOnInit() {
    this.hospitalService();
  }

  hospitalService(){
    let token = localStorage.getItem('token');
    this._hospitalService.getList(token).subscribe(res => {
      console.log(res['response']);
      this.hospitales = res['response'];
    })

  }

}
