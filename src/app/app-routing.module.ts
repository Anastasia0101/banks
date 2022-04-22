import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksPageComponent } from './views/banks-page/banks-page.component';
import { MortgagePageComponent } from './views/mortgage-page/mortgage-page.component';
import { StartPageComponent } from './views/start-page/start-page.component';

const routes: Routes = [
  { path: 'banks', component: BanksPageComponent },
  { path: 'mortgage', component: MortgagePageComponent },
  { path: 'start', component: StartPageComponent },
  { path: '**', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
