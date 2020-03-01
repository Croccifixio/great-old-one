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
    this.games = [
      {
        "categories": [
          "Jackpot Games",
          "Most Popular",
          "Video Slot"
        ],
        "name": "Joker Millions",
        "slug": "joker-millions",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x280.jpg?u=1546507715",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Bonanza Blast",
        "slug": "bonanza-blast",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/relax/rlx_rlx.ags.ags.bonanza_blast/relax-rlx_rlx.ags.ags.bonanza_blast-T280x280.png?u=1578571729",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Jackpot Raiders",
        "slug": "jackpot-raiders",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7361/yggdrasil-7361-T280x280.jpg?u=1558519583",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Dr Fortuno",
        "slug": "dr-fortuno",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7360/yggdrasil-7360-T280x280.jpg?u=1556094771",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Super Lucky Frog",
        "slug": "super-lucky-frog",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/frog_sw/netent-frog_sw-T280x280.jpg?u=1572961093",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Ozwin's Jackpots",
        "slug": "ozwins-jackpots",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7345/yggdrasil-7345-T280x280.jpg?u=1570968421",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Arabian Nights",
        "slug": "arabian-nights",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/arabian_not_mobile_sw/netent-arabian_not_mobile_sw-T280x280.jpg?u=1579272234",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Leprechaun goes to Hell",
        "slug": "leprechaun-goes-to-hell",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/playngo/png_315/playngo-png_315-T280x280.jpg?u=1557062517",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Divine Fortune",
        "slug": "divine-fortune",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/godsoffortune_not_mobile_sw/netent-godsoffortune_not_mobile_sw-T280x280.gif?u=1551433880",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Empire Fortune",
        "slug": "empire-fortune",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7324/yggdrasil-7324-T280x280.jpg?u=1556982761",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Mega Fortune",
        "slug": "mega-fortune",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/megafortune_not_mobile_sw/netent-megafortune_not_mobile_sw-T280x280.png?u=1559740127",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Holmes and the Stolen Stones",
        "slug": "holmes-and-the-stolen-stones",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-T280x280.jpg?u=1580468523",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Hall of Gods",
        "slug": "hall-of-gods",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/hallofgods_not_mobile_sw/netent-hallofgods_not_mobile_sw-T280x280.gif?u=1562081894",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Treasure Nile",
        "slug": "treasure-nile",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/treasurenile/microgaming-treasurenile-T280x280.jpg?u=1551877649",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "LotsALoot 5 Reel",
        "slug": "lotsaloot-5-reel",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/lotsaloot5reel/microgaming-lotsaloot5reel-T280x280.jpg?u=1551877720",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games",
          "Video Slot"
        ],
        "name": "Fruit Fiesta 3 Reel",
        "slug": "fruit-fiesta-3-reel",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/fruitfiesta/microgaming-fruitfiesta-T280x280.jpg?u=1559303261",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "Mega Joker",
        "slug": "mega-joker-new",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/netent/megajoker_not_mobile_sw/netent-megajoker_not_mobile_sw-T280x280.jpg?u=1559118092",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "Mega Moolah",
        "slug": "mega-moolah",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/MegaMoolah/microgaming-MegaMoolah-T280x280.jpg?u=1559302828",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "Mega Moolah Isis",
        "slug": "mega-moolah-isis",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/rubymegamoolahisis/microgaming-rubymegamoolahisis-T280x280.jpg?u=1551877945",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "Tunzamunni",
        "slug": "tunzamunni",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/tunzamunni/microgaming-tunzamunni-T280x280.jpg?u=1551877685",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "Major Millions",
        "slug": "major-millions",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/majormillions5reel/microgaming-majormillions5reel-T280x280.jpg?u=1551877584",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "WowPot",
        "slug": "wowpot",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/wowpot/microgaming-wowpot-T280x280.jpg?u=1572423608",
        "__typename": "Game"
      },
      {
        "categories": [
          "Jackpot Games"
        ],
        "name": "King Cashalot",
        "slug": "king-cashalot",
        "thumbnail": "//staging-static.cherrycasino.com/media/games/microgaming/kingcashalot/microgaming-kingcashalot-T280x280.jpg?u=1551877521",
        "__typename": "Game"
      }
    ]

    // this.route.paramMap.subscribe(params => {
    //   const categorySlug = params.get('categorySlug')

    //   this.apollo
    //   .watchQuery<Response>({
    //     query: gql`
    //       {
    //         lobby(slug: "casino") {
    //           categoryConnection {
    //             categories {
    //               name
    //               slug
    //             }
    //           }
    //           games {
    //               categories
    //               name
    //               slug
    //               thumbnail
    //           }
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     const categories = result?.data?.lobby?.categoryConnection?.categories;
    //     const games = result?.data?.lobby?.games;
    //     const activeCategory = categories.find(({ slug }) => slug === categorySlug);

    //     this.games = activeCategory
    //       ? games.filter(({ categories }) => categories.includes(activeCategory.name))
    //       : games;
    //     console.log(`this.games =>`, this.games)
    //     this.loading = result.loading;
    //     this.error = result.errors;
    //   });
    // })
  }

}
