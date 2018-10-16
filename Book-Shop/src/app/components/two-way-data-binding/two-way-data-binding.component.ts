import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  bookName: string;
  constructor() {
    this.bookName="Default"
  }

  ngOnInit() {
  
  }
  onButtonClick(){
    if(this.bookName.length===0)
    {
      alert("Значение не может быть пустым");
      this.bookName="Default"
      return;
    }
    alert("Ok!")
  }
}
