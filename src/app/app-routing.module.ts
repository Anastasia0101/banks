import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksListComponent } from './components/banks-list/banks-list.component';

const routes: Routes = [
  { path: 'banks', component: BanksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
