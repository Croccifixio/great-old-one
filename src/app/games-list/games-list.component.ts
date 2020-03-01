import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Game } from '../../types';

type Response = {
  lobby: {
    categoryConnection: {
      categories: [{
        name: string
        slug: string
      }]
    }
    games: Partial<Game>[]
  }
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: Partial<Game>[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categorySlug = params.get('categorySlug')

      this.apollo
      .watchQuery<Response>({
        query: gql`
          {
            lobby(slug: "casino") {
              categoryConnection {
                categories {
                  name
                  slug
                }
              }
              games {
                  categories
                  name
                  slug
                  thumbnail
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        const categories = result?.data?.lobby?.categoryConnection?.categories;
        const games = result?.data?.lobby?.games;
        const activeCategory = categories.find(({ slug }) => slug === categorySlug);

        this.games = activeCategory
          ? games.filter(({ categories }) => categories.includes(activeCategory.name))
          : games;
        this.loading = result.loading;
        this.error = result.errors;
      });
    })
  }

}
