import { Component, OnInit } from '@angular/core';
import {DesignList} from '../design-feed';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { 
  
  }
 photos = DesignList;

  
  ngOnInit(): void {
    
  }

}
