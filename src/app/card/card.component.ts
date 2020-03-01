import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private _img = `assets/images/placeholder-${Math.ceil(Math.random() * 3)}.png`
  @Input() link: string;
  @Input() title: string;
  @Input()
  set img(img: string) {
    if (!img) return

    this._img = img
  }

  get img(): string {
    return this._img
  }

  constructor() { }

  ngOnInit(): void {
  }

}
