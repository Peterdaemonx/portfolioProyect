import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from "@angular/forms";
import { contentEditable } from 'angular-content-editable';

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
import { DatatablesProductsComponent } from './datatables-products/datatables-products.component';
import { DatatablesComponent } from './components/datatables/datatables.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';


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
    TableFormComponent,
    DatatablesProductsComponent,
    DatatablesComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    NgbModule.forRoot(),
    DataTableModule,
    FormsModule
  ],
  providers: [
    InformacionService,
    ProductoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
