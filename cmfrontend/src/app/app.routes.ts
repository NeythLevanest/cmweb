import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
import { LoginComponent } from './login/login.component';
import { DboarduserComponent } from './pages/dboarduser/dboarduser.component';
import { HomedbComponent } from './pages/dboarduser/homedb/homedb.component';
import { MaterialesComponent } from './pages/dboarduser/materiales/materiales.component';
import { PremiosComponent } from './pages/dboarduser/premios/premios.component';
import { ProyectosComponent } from './pages/dboarduser/proyectos/proyectos.component';
import { PNosotrosComponent } from './pages/p-nosotros/p-nosotros.component';
import { PIntegrantesComponent } from './pages/p-integrantes/p-integrantes.component';
import { PEventosComponent } from './pages/p-eventos/p-eventos.component';
import { PProyectosComponent } from './pages/p-proyectos/p-proyectos.component';



const app_routes: Routes =[
    {path:'', component:HomeComponent},
    {path:'nosotros', component:PNosotrosComponent},
    {path:'integrantes', component:PIntegrantesComponent},
    {path:'eventos', component:PEventosComponent},
    {path:'proyectos', component:PProyectosComponent},
    {path:'login', component:LoginComponent},
    {path:'**', pathMatch:'full', redirectTo:'/'},
    {path:'dashboard', 
     component:DboarduserComponent,
     children: [
        {path:'dashboard-home', component:HomedbComponent},
        {path:'dashboard-proyectos', component:ProyectosComponent},
        {path:'dashboard-premios', component:PremiosComponent},
        {path:'dashboard-materiales', component:MaterialesComponent},
        {path:'', pathMatch:'full', redirectTo:'dashboard-home'}
     ]
    },
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: false});