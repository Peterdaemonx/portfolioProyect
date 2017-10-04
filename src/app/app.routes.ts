
import { RouterModule, Routes } from '@angular/router';
import {
  PortafolioComponent,
  ProductoComponent,
  AboutComponent
} from "./components/index.paginas"

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
