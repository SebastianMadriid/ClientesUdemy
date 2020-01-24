import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

// Servicios

import { ClienteService } from './Servicios/clientes.service';

// Rutas

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
