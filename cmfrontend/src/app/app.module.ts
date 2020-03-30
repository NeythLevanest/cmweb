import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomenewsComponent } from './home/homenews/homenews.component';
import { HomeComponent } from './home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
import {app_routing} from './app.routes';
  import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomenewsComponent,
    HomeComponent,
    VisitasComponent,
    LoginComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
