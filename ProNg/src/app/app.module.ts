import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';




@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      ProductsComponent,
      ShopingCardComponent,
      CheckOutComponent,
      OrderSuccessComponent,
      MyOrdersComponent,
      AdminProductsComponent,
      AdminOrdersComponent,
      LoginComponent

   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
