import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FlowerComponent } from './flower/flower.component';
import { FruitComponent } from './fruit/fruit.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [

  {path:"",component: HomeComponent},
  {
    path: 'login',
    children: [

      {path:'',component: LoginComponent},
      {path:'signup',component: SignUpComponent},
      
    ]
  },
  {path:'contactus',component: ContactUsComponent},
  {path:'card',component: CardComponent },
  {path:'vegetables',component:VegetablesComponent},
  {path:'flower',component:FlowerComponent},
  {path:'fruit',component:FruitComponent},
  {path:'explore',component:ExploreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
