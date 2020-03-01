import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators'
import { windowResize$ } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHamburgerVisible: boolean
  isHamburgerOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.setHamburgerVisibility()
    this.watchResize()
  }

  toggleHamburgerMenu(): void {
    this.isHamburgerOpen = !this.isHamburgerOpen
  }

  setHamburgerVisibility(): void {
    this.isHamburgerVisible = window.innerWidth <= 800
  }

  watchResize(): void {
    const resize$ = windowResize$.pipe(
      tap(() => this.setHamburgerVisibility())
    )

    resize$.subscribe()
  }

}
