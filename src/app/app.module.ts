import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { GamesListComponent } from './games-list/games-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { GameComponent } from './game/game.component';
import { OhNoComponent } from './oh-no/oh-no.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    CategoriesListComponent,
    HeaderComponent,
    CardComponent,
    GameComponent,
    OhNoComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GamesListComponent },
      { path: 'categories/:categorySlug', component: GamesListComponent },
      { path: 'game/:gameSlug', component: GameComponent },
      { path: 'oh-no', component: OhNoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
