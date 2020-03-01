import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-oh-no',
  templateUrl: './oh-no.component.html',
  styleUrls: ['./oh-no.component.scss']
})
export class OhNoComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'oh-no')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'oh-no')
  }

}
