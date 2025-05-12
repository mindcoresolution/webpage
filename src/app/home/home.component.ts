import { MatModules } from '../mat-modules';
import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServicesComponent } from "../services/services.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [MatModules, NavbarComponent, ServicesComponent, AboutComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {

  private isScroll = 0;
  isTextVisible: boolean = false;
  isMobile: boolean = false;
  isSlideAbout: boolean = false;

  constructor(private _breakPoint: BreakpointObserver) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleCounter();
  }

  ngOnInit() {
    this._breakPoint.observe([Breakpoints.Handset]).subscribe(res => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleText(){
    this.isTextVisible = !this.isTextVisible;
  }

  openWhatsapp(phoneNo: number){
    window.open(`https://wa.me/${phoneNo}`, '_blank');
  }

  private handleCounter(): void {
    const oTop = ($('#counter').offset()?.top || 0) - window.innerHeight;
    if (this.isScroll === 0 && $(window).scrollTop()! > oTop) {
      $('.counter-value').each(function () {
        const $this = $(this);
        const countTo = Number($this.attr('data-count'));
        $({ countNum: parseInt($this.text() || '0', 10) }).animate(
          { countNum: countTo},
          {
            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum).toString());
            },
            complete: function () {
              $this.text(this.countNum.toString());
            }
          }
        );
      });
      this.isScroll = 1;
    }
  }

  ngAfterViewInit(){
  }
  
}