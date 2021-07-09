import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './template/menu/menu.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { SliderComponent } from './template/slider/slider.component';
import "../assets/image/music-art-2.png";
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    SidebarComponent,
    SliderComponent,
    HomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
