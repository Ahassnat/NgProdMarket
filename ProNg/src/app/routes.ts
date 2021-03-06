import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-card', component: ShopingCardComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'order-success', component: OrderSuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin/products', component: AdminProductsComponent },
    { path: 'admin/orders', component: AdminOrdersComponent }
];
