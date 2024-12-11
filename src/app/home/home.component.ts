import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";

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
    })

    gsap.from('#accroche',{
      duration : 1,
      translateY : 100,
    })
    
    gsap.from('#desc',{
      duration : 1,
      translateY : 100,
    })

  }
}
