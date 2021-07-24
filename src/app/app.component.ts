import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  menu: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.menu = this.loginService.menu;
  }

  sideMenu(){
    this.navigate = 
    [
      {
        title : "Hospitales",
        url : "/mostrar-hospital",
        icon : "home"
      },
      {
        title : "Solicitar donantes",
        url : "/crear-publicaciones",
        icon : "add-circle"
      },
      {
        title : "Acerca",
        url : "/acerca-de",
        icon : "contacts"
      },
    ]
  }
}
