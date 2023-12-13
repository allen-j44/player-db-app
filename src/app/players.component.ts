import { Component } from '@angular/core';
import {WebService} from './web.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  players_list: any;

  constructor(public webService: WebService) { }

  ngOnInit(){
    this.webService.getPlayers();
  }
}
