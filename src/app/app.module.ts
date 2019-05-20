import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { DelComponent } from './del/del.component';
import { LikeComponent } from './like/like.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes =[
  { path: 'app-like', component: LikeComponent},
  { path: 'app-del', component: DelComponent},
  { path: 'app-all', component: AllComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DelComponent,
    LikeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
