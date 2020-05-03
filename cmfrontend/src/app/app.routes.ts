import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
import { LoginComponent } from './login/login.component';
import { DboarduserComponent } from './pages/dboarduser/dboarduser.component';
import { HomedbComponent } from './pages/dboarduser/homedb/homedb.component';
import { PremiosComponent } from './pages/dboarduser/premios/premios.component';
const app_routes: Routes =[
    {path:'dashboard', 
     component:DboarduserComponent,
     children: [
        {path:'dashboard-home', component:HomedbComponent},
        {path:'dashboard-awards', component:PremiosComponent},
        {path:'', pathMatch:'full', redirectTo:'dashboard-home'}
     ]
    },
    {path:'', component:HomeComponent},
    {path:'visitas', component:VisitasComponent},
    {path:'login', component:LoginComponent},
    //{path:'**', pathMatch:'full', redirectTo:'home'}
    
];

export const app_routing = RouterModule.forRoot(app_routes);