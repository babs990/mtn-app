import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import { services, stat } from './donnee';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  ecran = window.innerWidth
  readonly statistique = stat
  readonly services = services
  readonly service1 = this.services.filter((item)=>{
    return this.services.indexOf(item) < 3
  })
  readonly service2 = this.services.filter((item)=>{
    return this.services.indexOf(item) > 2
  })


  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

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

    if(this.ecran > 640){

      gsap.from('#Expériences',{
        opacity : 0,
        duration : 1,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Expériences',
          start : 'top 90%',
        }
      })
  
      gsap.from('#Projets',{
        opacity : 0,
        duration : 1,
        delay : 0.5,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Projets',
          start : 'top 90%',
        }
      })
  
      gsap.from('#Clients',{
        opacity : 0,
        duration : 1,
        delay : 0.9,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Clients',
          start : 'top 90%',
        }
      })


      gsap.from('#trait1',{
        opacity : 0,
        duration : 0.5,
        delay : 1.5,
        translateY : -100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '.imageApropos',
          start : 'top 80%',
        }
      })
  
      gsap.from('#apropos',{
        opacity : 0,
        duration : 0.5,
        delay : 2,
        translateX : -100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '.imageApropos',
          start : 'top 80%',
        }
      })
  
      gsap.from('#trait2',{
        opacity : 0,
        duration : 0.5,
        delay : 2.5,
        translateY : -400,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '.imageApropos',
          start : 'top 80%',
        }
      })
  
      gsap.from('#descApropos',{
        opacity : 0,
        duration : 0.5,
        delay : 3,
        translateX : -100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '.imageApropos',
          start : 'top 80%',
        }
      })
  
      gsap.from('#conseil',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        delay: 0.5,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#conseil',
          start : 'top 80%',
        }
      })
  
      gsap.from('#analyse',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        delay: 1,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#analyse',
          start : 'top 80%',
        }
      })
    
      gsap.from('#projet',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        delay: 0.5,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#projet',
          start : 'top 80%',
        }
      })
  
    }
    else{
      gsap.from('#Expériences',{
        opacity : 0,
        duration : 1,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Expériences',
          start : 'top 90%',
        }
      })
  
      gsap.from('#Projets',{
        opacity : 0,
        duration : 1,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Expériences',
          start : 'top 60%',
        }
      })
  
      gsap.from('#Clients',{
        opacity : 0,
        duration : 1,
        translateY : 100,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#Expériences',
          start : 'top 40%',
        }
      })

      gsap.from('#conseil',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#conseil',
          start : 'top 80%',
        }
      })
  
      gsap.from('#analyse',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#analyse',
          start : 'top 80%',
        }
      })
    
      gsap.from('#projet',{
        opacity : 0,
        translateY : -100,
        duration : 1,
        smoothOrigin : true,
        scrollTrigger : {
          trigger : '#projet',
          start : 'top 80%',
        }
      })

    }
    
    gsap.from('.imageApropos',{
      opacity : 0,
      duration : 1.5,
      delay : 0,
      translateX : -300,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '.imageApropos',
        start : 'top 90%',
      }
    })
    

    gsap.from('#trait1',{
      opacity : 0,
      duration : 0.5,
      translateY : -100,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#apropos',
        start : 'top 90%',
      }
    })

    gsap.from('#apropos',{
      opacity : 0,
      duration : 0.5,
      delay : 0.5,
      translateX : -100,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#apropos',
        start : 'top 90%',
      }
    })

    gsap.from('#trait2',{
      opacity : 0,
      duration : 0.5,
      translateY : -400,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#descApropos',
        start : 'top 80%',
      }
    })

    gsap.from('#descApropos',{
      opacity : 0,
      duration : 0.5,
      delay : 0.5,
      translateX : -100,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#descApropos',
        start : 'top 80%',
      }
    })

    gsap.from('#consultance',{
      opacity : 0,
      translateY : -200,
      duration : 1,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#consultance',
        start : 'top 80%',
      }
    })

    gsap.from('#investissement',{
      opacity : 0,
      translateY : -100,
      duration : 1,
      smoothOrigin : true,
      scrollTrigger : {
        trigger : '#investissement',
        start : 'top 80%',
      }
    })


  }

}
