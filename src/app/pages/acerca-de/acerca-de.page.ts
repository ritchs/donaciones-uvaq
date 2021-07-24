import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(
    private loginService: LoginService
  ) { 
    this.loginService.menu = true;
    console.log(loginService.menu);
  }

  ngOnInit() {
  }

}
