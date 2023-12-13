import { Component } from '@angular/core';
import {WebService} from './web.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  players_list: any = [];

  constructor(public webService: WebService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.players_list = this.webService.getPlayer(
      this.route.snapshot.params['id']
    );
  }
}
