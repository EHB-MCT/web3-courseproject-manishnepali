import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.getElementById("test")

    
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'white'
    })
    
 
      writer
          .strings(
            400,
            "Hello world.",
            "My name is Manish",
            "welcome to my portfolio website",
            "feel free to explore :)"
    
          )
          .start()
          .stop();
              

  }

}
