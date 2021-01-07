import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//clients
import { ClientListComponent } from './components/client/client-list.component';
import { ClientFormComponent } from './components/client/client-form.component';
import { ClientDetailComponent } from './components/client/client-detail.component';

const routes: Routes = [
  { path : 'client-list', component: ClientListComponent},
  { path : 'client-create', component: ClientFormComponent },
  { path : 'client-create/:id', component: ClientFormComponent },
  { path : 'client-detail/:id', component: ClientDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
