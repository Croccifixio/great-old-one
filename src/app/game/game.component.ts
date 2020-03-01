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

    this.game = {
      "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1559302828",
      "descriptionLong": "<p>Head on this unique safari to find not just animals, but massive jackpot prizes in <strong>Mega Moolah</strong>, our five reel, 25 payline <strong>jackpot game</strong> where the prizes are even bigger than the animals. In addition, amongst the herd, look out for bonus features to help you win.</p>\n\n<p>Usually out on an African safari tour, you&rsquo;d see many different types of animals &ndash; lions, elephants, tigers, monkeys, snakes, crocodiles and more. But in this exciting <strong>jackpot game</strong>, you&rsquo;ll see much more &ndash; a growing jackpot prize, which if played and won on the right day, could make you a millionaire. In fact, there&rsquo;s not even just one jackpot&hellip; there are four progressive jackpots to play for in <strong>Mega Moolah</strong>, making this game as exciting as ever. The jackpot you play for is up to you, as there are four different levels to play for depending on how much of a risk you want to take. The less risky options are smaller prizes&hellip; but if you decided to play for the jackpot with higher stakes, that&rsquo;s where you&rsquo;ll find the really big prizes.</p>\n\n<p>Additionally, there are plenty of bonus features to be triggered throughout the game to help you win prizes even more easily.</p>\n\n<p>Wild symbols: The lion symbol here is wild and will help to complete your winning paylines by substituting for symbols that you&rsquo;re missing.</p>\n\n<p>Scatter symbols: The hunter symbol in <strong>Mega Moolah </strong>symbolises the scatter, and if you find at least three of them, you&rsquo;ll trigger the free spins bonus round.</p>\n\n<p>Free spins bonus round: Once triggered by finding enough scatter symbols, you&rsquo;ll win yourself up to 15 free spins to play with &ndash; that&rsquo;s 15 free chances to spin the reels without actually placing a bet, but still being able to pick up real cash prizes. All wins won from a free spin will also be multiplied by three times!</p>\n",
      "name": "Mega Moolah",
      "slug": "mega-moolah",
      "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x280.jpg?u=1546507715",
      "__typename": "Game"
    }

  //   this.route.paramMap.subscribe(params => {
  //     const gameSlug = params.get('gameSlug')

  //     this.apollo
  //     .watchQuery<Response>({
  //       query: gql`
  //         {
  //           lobby(slug: "casino") {
  //             games {
  //               background
  //               descriptionLong
  //               name
  //               slug
  //               thumbnail
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .valueChanges.subscribe(result => {
  //       const games = result?.data?.lobby?.games;
  //       console.log(`games =>`, games)
  //       this.game = games.find(({ slug }) => slug === gameSlug)
  //       this.loading = result.loading;
  //       this.error = result.errors;
  //     });
  //   })
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
