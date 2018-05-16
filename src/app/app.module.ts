import {HttpModule} from '@angular/http';
import { provideRoutes } from '@angular/router/public_api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas;
// import { app_routing } from './app.routes';
import { AppRoutingModule } from './/app-routing.module';

// servicios
import { InfoService } from './services/info.service';
import { ProductosService } from './services/productos.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PorfolioItemComponent } from './components/porfolio-item/porfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PorfolioItemComponent
  ],
  imports: [
    BrowserModule,
   // app_routing,
    AppRoutingModule,
    HttpModule
  ],
  providers: [InfoService,
    ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
