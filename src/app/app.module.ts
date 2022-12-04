import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfobannerComponent } from './componentes/infobanner/infobanner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PorfolioService } from './componentes/servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InfobannerComponent,
    AcercadeComponent,
    EstudioComponent,
    ExperienciaComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    Error404Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
