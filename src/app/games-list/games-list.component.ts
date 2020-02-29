import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    games: [{
      background: string
      categories: string[]
      name: string
      slug: string
    }]
  }
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: any[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.games = [{"background":null,"categories":["Most Popular"],"name":"Pyro Pixie","slug":"pyro-pixie","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Space Stallion","slug":"space-stallion","__typename":"Game"},{"background":"//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1566907772","categories":["Most Popular","Video Slot"],"name":"Dazzle Me","slug":"dazzle-me","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Arctic Magic","slug":"arctic-magic","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Ankh of Anubis","slug":"ankh-of-anubis","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Troll Hunters","slug":"troll-hunters","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Book of Dead","slug":"book-of-dead","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Rise of Merlin","slug":"rise-of-merlin","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Vikings go Berzerk","slug":"vikings-go-berzerk","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"The Nutcracker","slug":"the-nutcracker","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Ice Ice Yeti","slug":"ice-ice-yeti","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Danger High Voltage","slug":"danger-high-voltage-btg","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Bonanza","slug":"bonanza-new","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Wild Swarm","slug":"wild-swarm","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Gonzo's Quest","slug":"gonzos-quest","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Reactoonz","slug":"reactoonz","__typename":"Game"},{"background":null,"categories":["Most Popular","Video Slot"],"name":"Dragon Tribe","slug":"dragon-tribe","__typename":"Game"}]

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
    //             background
    //             categories
    //             name
    //             slug
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
    //     this.loading = result.loading;
    //     this.error = result.errors;
    //   });
    // })
  }

}
