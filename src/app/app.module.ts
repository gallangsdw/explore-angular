import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"; 

//MATERIAL DESIGN COMPONENT 
import {MatToolbarModule} from "@angular/material/toolbar"; 
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog"
import {MatFormFieldModule} from "@angular/material/form-field";  
import {MatInputModule} from "@angular/material/input";
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { KonfirmasiComponent } from './konfirmasi/konfirmasi.component';


@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    KonfirmasiComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
