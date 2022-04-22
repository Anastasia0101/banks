import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksListComponent } from './components/banks-list/banks-list.component';
import { MortgageFormComponent } from './modules/mortgage-calculartor/components/mortgage-form/mortgage-form.component';

const routes: Routes = [
  { path: 'banks', component: BanksListComponent },
  { path: 'mortgage', component: MortgageFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
