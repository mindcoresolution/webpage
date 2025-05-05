import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatModules } from '../mat-modules';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'cms-navbar',
  imports: [MatModules],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {

  isMobile: boolean = false;
  isMenuOpen: boolean = false;
  @Output() navigationEv = new EventEmitter<any>();
  constructor(private _breakPoint: BreakpointObserver){}

  ngOnInit(){
    this._breakPoint.observe([Breakpoints.Handset]).subscribe(res => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  onClick(ev: any, evName: string){
    this.navigationEv.emit({event: ev, navigatorName: evName});
  }

}
