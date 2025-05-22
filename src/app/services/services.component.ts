import { Component } from '@angular/core';
import { MatModules } from '../mat-modules';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as AOS from 'aos';

@Component({
  selector: 'cms-services',
  imports: [MatModules],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  isMobile: boolean = false;
  cardsData: any[] = [
    { img: 'development.png', title: 'Web Development', desc: 'Custom web applications and responsive websites built with modern frameworks and best practices.' },
    { img: 'mobile-development.png', title: 'Mobile Development', desc: 'Native and cross-platform mobile applications for IOS and Android platforms.' },
    { img: 'microchip.png', title: 'AI Solutions', desc: 'Intelligent systems and machine learning solutions to automate and optimize business processes.' },
    { img: 'migrating.png', title: 'Cloud Services', desc: 'Cloud infrastructure setup, migration, and management for scalable and secure operations.' },
    { img: 'customer-support.png', title: 'IT Consulting', desc: 'Strategic technology consulting to help businesses make informed digital decisions.' },
    { img: '24-hours-support.png', title: 'Support & Maintenance', desc: 'Comprehensive support services to ensure your systems run smoothly and efficiently.' },
  ];

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

}
