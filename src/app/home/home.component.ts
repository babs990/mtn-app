import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import { stat } from './donnee';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.from('#imageHead',{
      opacity : 0,
      duration : 3,
      translateX : 200,
      delay:1
    })

    gsap.from('#accroche',{
      opacity : 0,
      duration : 1,
      translateY : 100,
      smoothOrigin : true
    })
    
    gsap.from('#desc',{
      opacity : 0,
      duration : 1,
      translateY : 100,
      delay : 0.3,
      smoothOrigin : true
    })

    gsap.from('#button',{
      opacity : 0,
      duration : 1,
      translateY : 100,
      delay : 0.7,
      smoothOrigin : true
    })

    console.log(this.statistique)
  }

  readonly statistique = stat
}
