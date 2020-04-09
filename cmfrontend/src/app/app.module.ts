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
import { ProyectoshomeComponent } from './home/proyectoshome/proyectoshome.component';
import { IntegrantesComponent } from './home/integrantes/integrantes.component';
import { FooterComponent } from './footer/footer.component';
import { CursosComponent } from './cursos/cursos.component';
import { IntegrantespageComponent } from './integrantespage/integrantespage.component';
import { ProyectospagesComponent } from './proyectospages/proyectospages.component';
import { PcuserpageComponent } from './pcuserpage/pcuserpage.component';
import { NavbarcpanelComponent } from './pcuserpage/navbarcpanel/navbarcpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomenewsComponent,
    HomeComponent,
    VisitasComponent,
    LoginComponent,
    NosotrosComponent,
    ProyectoshomeComponent,
    IntegrantesComponent,
    FooterComponent,
    CursosComponent,
    IntegrantespageComponent,
    ProyectospagesComponent,
    PcuserpageComponent,
    NavbarcpanelComponent
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
