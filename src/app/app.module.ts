import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Rutas
import { app_routing } from "./app.routes"

// Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductoService } from './services/producto.service';
import { LoginService } from './services/login.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SearchComponent } from './components/search/search.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { TableFormComponent } from './components/table-form/table-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent,
    SearchComponent,
    LoginFormComponent,
    BookFormComponent,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    NgbModule.forRoot(),
  ],
  providers: [
    InformacionService,
    ProductoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
