import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { Appproduct } from "./product.component";
import { AppInventory } from "./inventory.component";
import { RouterModule, Router, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: 'Product', component: Appproduct},
  {path: 'Inventory', component: AppInventory},
]

@NgModule({
  imports: [BrowserModule, HttpModule,
  RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
