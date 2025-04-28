import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatModules } from '../mat-modules';
import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [MatModules],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: []
})
export class HomeComponent implements OnInit {

  private isScroll = 0;
  isTextVisible: boolean = false;

  constructor(private _myDialog: MatDialog) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleNavbar();
    this.handleCounter();
  }

  toggleText(){
    this.isTextVisible = !this.isTextVisible;
  }

  openContact(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "70vw";
    dialogConfig.height = "auto";
    this._myDialog.open(ContactComponent, dialogConfig);
  }

  openWhatsapp(phoneNo: number){
    window.open(`https://wa.me/${phoneNo}`, '_blank');
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