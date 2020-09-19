import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModules } from './pages/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VisitasComponent } from './visitas/visitas.component';
import {app_routing} from './app.routes';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';

import { CursosComponent } from './cursos/cursos.component';
import { DboarduserComponent } from './pages/dboarduser/dboarduser.component';
import { HeaderbardbuComponent } from './shared/headerbardbu/headerbardbu.component';
import { HomedbComponent } from './pages/dboarduser/homedb/homedb.component';
import { ProyectosComponent } from './pages/dboarduser/proyectos/proyectos.component';
import { MaterialesComponent } from './pages/dboarduser/materiales/materiales.component';
import { PremiosComponent } from './pages/dboarduser/premios/premios.component';
import { PIntegrantesComponent } from './pages/p-integrantes/p-integrantes.component';
import { PNosotrosComponent } from './pages/p-nosotros/p-nosotros.component';
import { PEventosComponent } from './pages/p-eventos/p-eventos.component';
import { PProyectosComponent } from './pages/p-proyectos/p-proyectos.component';





@NgModule({
  declarations: [
    AppComponent,
    VisitasComponent,
    LoginComponent,
    CursosComponent,
    DboarduserComponent,
    HeaderbardbuComponent,
    HomedbComponent,
    ProyectosComponent,
    MaterialesComponent,
    PremiosComponent,
    PIntegrantesComponent,
    PNosotrosComponent,
    PEventosComponent,
    PProyectosComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    HomeModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
