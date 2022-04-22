import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { BanksService } from './services/banks.service';

import { AppComponent } from './app.component';
import { BankDialogComponent } from './components/bank-dialog/bank-dialog.component';
import { BanksListComponent } from './components/banks-list/banks-list.component';
import { BankComponent } from './components/bank/bank.component';
import { BankFormComponent } from './components/bank-form/bank-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MortgageFormComponent } from './modules/mortgage-calculartor/components/mortgage-form/mortgage-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BankDialogComponent,
    BanksListComponent,
    BankComponent,
    BankFormComponent,
    HeaderComponent,
    MortgageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    BanksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
