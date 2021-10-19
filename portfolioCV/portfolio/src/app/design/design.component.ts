import { Component, OnInit } from '@angular/core';
import Designs from '../design.json';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { 
  
  }
  slideConfig = {}
 designs : {
   "../../assets/potfolio/2.png"
   

 }
  
  ngOnInit(): void {
    
  }

}
