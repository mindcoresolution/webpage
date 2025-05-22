import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatModules } from '../mat-modules';
import * as AOS from 'aos';

@Component({
  selector: 'cms-about',
  imports: [MatModules],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  isMobile: boolean = false;

  constructor(private _breakPoint: BreakpointObserver){

  }

  ngOnInit() {
    this._breakPoint.observe([Breakpoints.Handset]).subscribe(res => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
     AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
        });
  }

  // checkScroll = () => {
  //   const element = document.getElementById('aboutUs');
  //   const rect = element?.getBoundingClientRect();
    
  //   if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
  //     element?.classList.add('show');
  //   } else {
  //     element?.classList.remove('show');
  //   }
  // }

  // window.addEventListener('scroll', this.checkScroll);
}
