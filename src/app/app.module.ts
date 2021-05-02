import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRTestComponent } from './Components/qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    QRTestComponent
  ],
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
