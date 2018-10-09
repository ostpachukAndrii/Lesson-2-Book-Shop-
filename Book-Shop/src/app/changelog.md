ng g c Book
ng g c BookComponent
ng g c Cart -spec false -s -t
ng g c components/CartItem --flat
ng g c ProcessOrderForm --skip import

ng g d directives/Orders
ng g m MyModule
ng g m MyModule2 -m app