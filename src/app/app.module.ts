import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppingList/ShoppinglistComponent';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
