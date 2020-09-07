import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule,Routes } from '@angular/router';
import { Routperameters } from './Routperameters.service';
import { LazynotwModule } from './lazynotw/lazynotw.module';


import { HttpClientModule } from '@angular/common/http';
import { HttpsrService } from './httpsr.service';
import { FormsModule } from '@angular/forms';
import { SearchListComponent } from './lazynotw/search-list/search-list.component';
import { EditlistComponent } from './lazynotw/editlist/editlist.component';
//import { AllhomeComponent } from './allhome/allhome.component';


const rout:Routes=[
 
  {path:"home",component:HomeComponent},  
  {path:'',loadChildren:'./modulelogin/modulelogin.module#ModuleloginModule'},
  {path:"aboutus", component:AboutusComponent},
  {path:"Lazyhead",loadChildren:'./lazynotw/lazynotw.module#LazynotwModule'},
  {path:"searchlist",component:SearchListComponent},
  {path:'editlist',component:EditlistComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    EditlistComponent,
   // AllhomeComponent,
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    LazynotwModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [Routperameters,HttpsrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
