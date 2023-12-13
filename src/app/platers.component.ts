import { Component } from '@angular/core';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  players_list = [
    {
      "name" : "Jack Allen",
      "club" : "Ards FC",
      "age" : 21
    },
    {
      "name" : "Gary Cunningham",
      "club" : "Abbey Villa FC",
      "age" : 21
    },
    {
      "name" : "Glenn Moffett",
      "club" : "Agape FC",
      "age" : 21
    }
  ]
}
