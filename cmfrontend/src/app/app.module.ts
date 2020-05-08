import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomenewsComponent } from './pages/home/homenews/homenews.component';
import { HomeComponent } from './pages/home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
import {app_routing} from './app.routes';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './pages/home/nosotros/nosotros.component';
import { ProyectoshomeComponent } from './pages/home/proyectoshome/proyectoshome.component';
import { IntegrantesComponent } from './pages/home/integrantes/integrantes.component';
import { FooterComponent } from './footer/footer.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProyectospagesComponent } from './proyectospages/proyectospages.component';
import { DboarduserComponent } from './pages/dboarduser/dboarduser.component';
import { HeaderbardbuComponent } from './shared/headerbardbu/headerbardbu.component';
import { HomedbComponent } from './pages/dboarduser/homedb/homedb.component';
import { ProyectosComponent } from './pages/dboarduser/proyectos/proyectos.component';
import { MaterialesComponent } from './pages/dboarduser/materiales/materiales.component';
import { PremiosComponent } from './pages/dboarduser/premios/premios.component';



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
    ProyectospagesComponent,
    DboarduserComponent,
    HeaderbardbuComponent,
    HomedbComponent,
    ProyectosComponent,
    MaterialesComponent,
    PremiosComponent
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
