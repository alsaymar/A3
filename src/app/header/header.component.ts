import { Component, OnInit } from '@angular/core';
import { Student } from './../student';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currStudent : Student = {
    sname: "Talal Al-Saymaree", sid: 991310258, slogin: "alsaymar",
    scampus: "Brampton", aname: "Assignment 3"
  };

 
  constructor() { }

  ngOnInit() {
  }

}
