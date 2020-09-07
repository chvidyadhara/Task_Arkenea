import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule,Routes, Router } from '@angular/router';
import { RegistrComponent } from './registration/registr.component';
import {FormsModule } from '@angular/forms';


const rout:Routes =[
  {path:'',component:LoginComponent},
  {path:'registr',component:RegistrComponent}
              ]
@NgModule({
  declarations: [LoginComponent,RegistrComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rout),
    FormsModule
  ]
})
export class ModuleloginModule { }
