ng g c Book
ng g c BookComponent
ng g c Cart -spec false -s -t
ng g c components/CartItem --flat
ng g c ProcessOrderForm --skip import

ng g d directives/Orders
ng g m MyModule
ng g m MyModule2 -m app


//Додаткове завдання

1. Додаємо Bootstrap npm install bootstrap@3.3.7
2. Додаємо Bootstrap до стилів проекту angular.json
3. Додаємо TemplateComponent (шаблон з файлу *.html)
ng g c components/Template -s
4. Додаємо InlineTemplateComponent (шаблон з поля template)
ng g c components/InlineTemplate -s -t
5. Додаємо компонент TemplatesComponent, який буде використовуватися для виведення template та inline-template
6. Додаємо StylesComponent (стилі з *.css)
ng g c components/Style
7. Додаємо InlineStylesComponent (стилі з styles )
для виведення style та inline-styles
8. Додаємо CSSSelectorComponent ng g c components/css-selector, щоб показати можливість використання css селекторів в полі selector
9. Додаємо PropertyBindingComponent ng g c components/property-binding
10. Додаємо TwoWayDataBindingComponent  ng g c components/two-way-data-binding
11. Додаємо директиву ng g d directives\redblack\redblack 
12. Додаємо ng g pipe pipes/reversepipe

