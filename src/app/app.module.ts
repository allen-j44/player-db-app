import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players.component';
import {WebService} from './web.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PlayerComponent } from './player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';


var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'players/:id',
    component: PlayerComponent
  }
];


@NgModule({
  declarations: [
    AppComponent, PlayersComponent, HomeComponent, PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-idn0erkobo8ef7ub.uk.auth0.com',
      clientId: 'UZ5dgj9R9498ZCnRqkVWXiKdoNFLqjtG'
    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
