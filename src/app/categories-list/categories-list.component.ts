import { Component, Input, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() isHamburgerOpen: boolean;
  @Input() isHamburgerVisible: boolean;
  categories: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.loading = false;
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
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         lobby(slug: "casino") {
    //           categoryConnection {
    //             categories {
    //               name
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.categories = result?.data?.lobby?.categoryConnection?.categories;
    //     console.log(`result =>`, result)
    //     console.log(`this.categories =>`, this.categories)
    //     this.loading = result.loading;
    //     this.error = result.errors;
    //   });
  }

}
