import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisitasComponent } from './visitas/visitas.component';
const app_routes: Routes =[
    {path:'home', component:HomeComponent},
    {path:'visitas', component:VisitasComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);