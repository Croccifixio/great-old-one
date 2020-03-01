import { Component, Input, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

type Response = {
  lobby: {
    categoryConnection: {
      categories: [{
        name: string
        slug: string
      }]
    }
  }
}

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() isHamburgerOpen: boolean;
  @Input() isHamburgerVisible: boolean;
  categories: any[];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.categories = [
      {
        "name": "Most Popular",
        "slug": "most-popular"
      },
      {
        "name": "Video Slot",
        "slug": "video-slots"
      },
      {
        "name": "Table Games",
        "slug": "table-games"
      },
      {
        "name": "Jackpot Games",
        "slug": "jackpot-games"
      }
    ]
  }

}
