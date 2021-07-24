import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{AuthGuardService}from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'mostrar-hospital', loadChildren: './pages/mostrar-hospital/mostrar-hospital.module#MostrarHospitalPageModule', canActivate: [AuthGuardService] },
  { path: 'crear-publicaciones', loadChildren: './pages/crear-publicaciones/crear-publicaciones.module#CrearPublicacionesPageModule', canActivate: [AuthGuardService] },
  { path: 'acerca-de', loadChildren: './pages/acerca-de/acerca-de.module#AcercaDePageModule', canActivate: [AuthGuardService] },
  { path: 'mostrar-publicacion', loadChildren: './pages/mostrar-publicacion/mostrar-publicacion.module#MostrarPublicacionPageModule', canActivate: [AuthGuardService] },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuardService] },
  { path: 'donar-hospital', loadChildren: './pages/donar-hospital/donar-hospital.module#DonarHospitalPageModule', canActivate: [AuthGuardService] },
  { path: 'donar-paciente', loadChildren: './pages/donar-paciente/donar-paciente.module#DonarPacientePageModule', canActivate: [AuthGuardService] },
  { path: 'mostrar-hospital', loadChildren: './pages/mostrar-hospital/mostrar-hospital.module#MostrarHospitalPageModule', canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
