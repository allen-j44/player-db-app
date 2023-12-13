import { Component } from '@angular/core';
import {WebService} from './web.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  players_list: any = [];
  page: number = 1;

  constructor(public webService: WebService) { }

  ngOnInit(){
    this.players_list = this.webService.getPlayers(this.page);
  }
  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.players_list = this.webService.getPlayers(this.page);
    }

  }
  nextPage() {
    this.page = this.page + 1;
    this.players_list = this.webService.getPlayers(this.page);

  }
}
