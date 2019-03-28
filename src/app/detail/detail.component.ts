import { Component, OnInit } from '@angular/core';
import { MYSONGS } from './../mySongs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  index= "0";
  mysongs =  MYSONGS;
  constructor() { }
  onClick(event: any){
    this.index = (<HTMLButtonElement>event.target).id;
  }
  ngOnInit() {

  }

}
