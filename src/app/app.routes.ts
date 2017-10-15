import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  SearchComponent,
  AboutComponent,
  LoginFormComponent,
  BookFormComponent,
  TableFormComponent,
  DatatablesComponent
} from "./components/index.paginas"

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: '', component: PortafolioComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'book', component: BookFormComponent },
  { path: 'table', component: TableFormComponent },
  { path: 'datatables', component: DatatablesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
