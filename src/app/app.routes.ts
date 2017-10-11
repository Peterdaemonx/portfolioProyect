import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  SearchComponent,
  AboutComponent,
  LoginFormComponent
} from "./components/index.paginas"

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
