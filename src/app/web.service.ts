import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  players_list: any;

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get(
      'http://127.0.0.1:5000/api/v1.0/players'
    ).subscribe((response: any) =>{
      this.players_list = response;
      console.log(response);
    });

  }

}
