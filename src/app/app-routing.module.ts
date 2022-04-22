import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksPageComponent } from './views/banks-page/banks-page.component';
import { MortgagePageComponent } from './views/mortgage-page/mortgage-page.component';

const routes: Routes = [
  { path: 'banks', component: BanksPageComponent },
  { path: 'mortgage', component: MortgagePageComponent },
  { path: '**', component: BanksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
