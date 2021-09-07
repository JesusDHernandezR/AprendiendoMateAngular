import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
  {path:'add', component:SumaComponent},
  {path:'resta', component:RestaComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
