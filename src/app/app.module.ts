import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { CommonComponents} from './common/common';
import { MatModule } from './material-module'
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HomeComponent,
    CommonComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatModule,
    BrowserAnimationsModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
