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
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<Response>({
        query: gql`
          {
            lobby(slug: "casino") {
              categoryConnection {
                categories {
                  name
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.categories = result?.data?.lobby?.categoryConnection?.categories;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

}
