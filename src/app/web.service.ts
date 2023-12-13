import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {


  constructor(private http: HttpClient) {}

  getPlayers(page: number) {
    return this.http.get('http://127.0.0.1:5000/api/v1.0/players?pn=' +
                          page);

  }

  getPlayer(id: any) {
    return this.http.get('http://127.0.0.1:5000/api/v1.0/players/' + id);

  }

}
