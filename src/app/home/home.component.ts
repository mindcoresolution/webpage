import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatModules } from '../mat-modules';
import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  imports: [MatModules],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  private isScroll = 0;
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleNavbar();
    this.handleCounter();
    const element = document.getElementById('about');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }

  private handleNavbar(): void {
    const nav = document.getElementById('main');
    if (nav) {
      if (window.pageYOffset > 600) {
        nav.style.backgroundColor = '#000';
        nav.style.boxShadow = '0px 4px 2px grey';
      } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
      }
    }
  }

  private handleCounter(): void {
    const oTop = ($('#counter').offset()?.top || 0) - window.innerHeight;

    if (this.isScroll === 0 && $(window).scrollTop()! > oTop) {
      $('.counter-value').each(function () {
        const $this = $(this);
        const countTo = Number($this.attr('data-count'));

        $({ countNum: parseInt($this.text() || '0', 10) }).animate(
          {
            countNum: countTo
          },
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
}