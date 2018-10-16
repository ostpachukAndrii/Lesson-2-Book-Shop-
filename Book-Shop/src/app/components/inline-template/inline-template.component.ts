import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `
  <div class="row">
  <div class="col-md-4">
    <h3>Inline template component</h3>
  </div></div>`,
  styles: []
})
export class InlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
