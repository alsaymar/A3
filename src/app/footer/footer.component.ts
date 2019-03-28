import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 currStudent : Student = {
   sname: "Talal Al-Saymaree", sid: 991310258, slogin: "alsaymar",
   scampus: "Brampton", aname: "Assignment 3"
 };
  constructor() { }
 
  ngOnInit() {
   }
    
}
