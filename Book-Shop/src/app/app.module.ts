import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';

import { ProcessOrderFormComponent } from './process-order-form/process-order-form.component';
import { OrdersDirective } from './directives/orders.directive';
import { MyModule2Module } from './my-module2/my-module2.module';
import { TemplatesComponent } from './components/templates/templates.component';
import { TemplateComponent } from './components/template/template.component';
import { InlineTemplateComponent } from './components/inline-template/inline-template.component';
import { StylesComponent } from './components/styles/styles.component';
import { InlineStylesComponent } from './components/inline-styles/inline-styles.component';
import { StyleComponent } from './components/style/style.component';
import { CssSelectorComponent } from './components/css-selector/css-selector.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RedblackDirective } from './directives/redblack/redblack.directive';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    ProcessOrderFormComponent,
    OrdersDirective,
    TemplatesComponent,
    TemplateComponent,
    InlineTemplateComponent,
    StylesComponent,
    InlineStylesComponent,
    StyleComponent,
    CssSelectorComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    RedblackDirective,
    MyUpperCasePipe,
  ],
  imports: [
    BrowserModule,
    MyModule2Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
