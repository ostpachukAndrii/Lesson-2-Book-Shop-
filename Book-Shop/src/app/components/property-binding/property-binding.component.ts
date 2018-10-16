import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  
  allowButton: boolean = false;
  buttonName: string = "Button disable";
  
  constructor() { 
    this.allowButtonInTwoSeconds();
  }

  onClick() {
    this.allowButton=false;
    this.buttonName= "Button disable";
    this.allowButtonInTwoSeconds();
  }
  
  allowButtonInTwoSeconds() {
    setTimeout(() => {
      this.allowButton=true;
      this.buttonName="Button enable";
    }, 2000);
  }

  ngOnInit() {
  }

}
