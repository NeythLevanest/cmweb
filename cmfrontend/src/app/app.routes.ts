import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
import { LoginComponent } from './login/login.component';
const app_routes: Routes =[
    {path:'home', component:HomeComponent},
    {path:'visitas', component:VisitasComponent},
    {path:'login', component:LoginComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);