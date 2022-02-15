import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './Auth/login/login.component';
import { FilterPipe } from './card/filter.pipe';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { FlowerComponent } from './flower/flower.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ExploreComponent } from './explore/explore.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    FilterPipe,
    SignUpComponent,
    ContactUsComponent,
    HomeComponent,
    DialogComponent,
    FlowerComponent,
    FruitComponent,
    VegetablesComponent,
    ExploreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
