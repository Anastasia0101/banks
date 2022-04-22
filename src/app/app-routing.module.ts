import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksListComponent } from './components/banks-list/banks-list.component';
import { MortgagePageComponent } from './modules/mortgage-calculartor/components/mortgage-page/mortgage-page.component';

const routes: Routes = [
  { path: 'banks', component: BanksListComponent },
  { path: 'mortgage', component: MortgagePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
