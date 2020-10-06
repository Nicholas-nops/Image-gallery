import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-component',
  templateUrl: './galery-component.component.html',
  styleUrls: ['./galery-component.component.css']
})
export class GaleryComponentComponent {
  userIndex: number = 1;

  @Input() titles: string[] = ['','Water city', 'little tree', 'Old table style', 'Jeep', 'Old House Style'];
  @Input() images: string[] = [ '',
    'https://images.unsplash.com/photo-1599689807779-e96b53f32de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80',
    'https://images.unsplash.com/photo-1598367969565-b895af97fbdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=812&q=80',
    'https://images.unsplash.com/photo-1601582097267-eb5ca292637c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80',
    'https://images.unsplash.com/photo-1601412835680-8e4d0bad485b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1575880467762-6a6bbbe52c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80'
  ];

  changeIndex(number) {
    if (this.userIndex >= 1 && number < 1 ||  //index must be greater than 0 at all times
      this.userIndex < this.images.length && number > 0 && this.userIndex < 5) {  //index must be less than length of array
      this.userIndex += number;
    }
  }
  firstImg(number){
    this.userIndex = 1;
  }
  lastImg(number){
    this.userIndex = 5;
  }

}
