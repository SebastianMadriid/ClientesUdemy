import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';

const APP_ROUTES: Routes = [
    { path: 'clientes', component: ClientesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
