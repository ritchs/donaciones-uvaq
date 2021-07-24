import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from './login.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    public router: Router,
    private loginService: LoginService,) {
  }
  canActivate() {
    let token = localStorage.getItem("token");
    console.log('Token', token);
    if (token) {
      console.log("Existe token");
      this.loginService.menu = true;
      return true;
    }else{
      this.router.navigateByUrl('login');
      this.loginService.menu = false;
    return false;
    }
  }
}
