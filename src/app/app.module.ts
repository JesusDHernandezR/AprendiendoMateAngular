import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperacionComponent } from './operacion/operacion.component';
import { AprendeComponent } from './aprende/aprende.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    OperacionComponent,
    AprendeComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    RestaComponent,
    SumaComponent,
    NavMenuComponent,
    HomeComponent,
    MultiplicacionComponent,
    DivisionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
