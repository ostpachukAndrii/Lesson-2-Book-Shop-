import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-styles',
  templateUrl: './inline-styles.component.html',
  styles: [`.col-md-4{
    background: wheat;
  }`]
})
export class InlineStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
