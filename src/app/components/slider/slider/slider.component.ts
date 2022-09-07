import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../assets/images/mm.jpg", nam:"wael wael" }
    ,  
    { img: "../assets/images/noor.png" },  
    { img: "../assets/images/mm.jpg" }, 
     { img: "../assets/images/new.png" }, 
      { img: "../assets/images/new.png" }, 
       { img: "../assets/images/madinaty.png" },  
 
  ];  
  slideConfig = {  
    'slidesToShow': 1,
     'slidesToScroll': 6,
      autoplay: true,
   autoplaySpeed: 2000,
     'arrows': true,
     'swipeToSlide': true,
     'infinite': true,
     'responsive': [
       {
         'breakpoint': 767,
         'slidesToShow': 6
       }
     ]
   }; 

}
