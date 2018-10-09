import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './components/cart-item.component';
import { ProcessOrderFormComponent } from './process-order-form/process-order-form.component';
import { OrdersDirective } from './directives/orders.directive';
import { MyModule2Module } from './my-module2/my-module2.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponentComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    ProcessOrderFormComponent,
    OrdersDirective
  ],
  imports: [
    BrowserModule,
    MyModule2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
