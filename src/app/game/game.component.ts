import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { tap } from 'rxjs/operators'
import { windowResize$ } from '../../utils';
import { Game } from '../../types';

type Response = {
  lobby: {
    games: Partial<Game>[]
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Partial<Game>;
  layout: string;
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setLayout()
    this.watchResize()

    this.route.paramMap.subscribe(params => {
      const gameSlug = params.get('gameSlug')

      this.apollo
      .watchQuery<Response>({
        query: gql`
          {
            lobby(slug: "casino") {
              games {
                background
                descriptionLong
                name
                slug
                thumbnail
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        const games = result?.data?.lobby?.games;
        this.game = games.find(({ slug }) => slug === gameSlug)
        this.loading = result.loading;
        this.error = result.errors;
      });
    })
  }

  setLayout() {
    this.layout = window.innerWidth <= 400 ? 'mobile' : 'desktop'
  }

  watchResize() {
    const resize$ = windowResize$.pipe(
      tap(() => this.setLayout())
    )

    resize$.subscribe()
  }

}
