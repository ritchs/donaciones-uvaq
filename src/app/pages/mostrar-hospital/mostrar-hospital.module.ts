import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MostrarHospitalPage } from './mostrar-hospital.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: MostrarHospitalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarHospitalPage]
})
export class MostrarHospitalPageModule {}
