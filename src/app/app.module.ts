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
    ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
