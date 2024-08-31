import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { ProductsComponent } from './products/products.component';
import { MailsComponent } from './mails/mails.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { MemesComponent } from './memes/memes.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login-page",component:LoginPageComponent},
 
 {path:"dashboard",canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
  {path:"vehicles",component:VehiclesComponent},
  {path:"bankaccounts",component:BankaccountsComponent},
  {path:"flipkart",component:FlipkartComponent},
  {path:"products",component:ProductsComponent},
  {path:"mails",component:MailsComponent},
  {path:"create-vehicle",component:CreateVehicleComponent},
  {path:"student-card",component:StudentCardComponent},
  {path:"create-student-card",component:CreateStudentCardComponent},
  {path:"memes",component:MemesComponent},
  {path:"view-vehicle/:id",component:ViewVehicleComponent},
  {path:"edit-vehicle/:id",component:CreateVehicleComponent},
 ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
