import { NgModule } from "@angular/core";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectoshomeComponent } from './proyectoshome/proyectoshome.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { HomenewsComponent } from './homenews/homenews.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        NosotrosComponent,
        ProyectoshomeComponent,
        IntegrantesComponent,
        HomenewsComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent
    ],
    exports:[
        NosotrosComponent,
        ProyectoshomeComponent,
        IntegrantesComponent,
        HomenewsComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent
        
        //Footer2Component
    ],
    imports:[
        BrowserModule,
    ]
})
export class HomeModules{}