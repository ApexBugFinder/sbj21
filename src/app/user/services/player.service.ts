import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Player, defaultPlayer } from '../models/player'
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
            this.ctlrName = 'players/';
            this.apiRt = Constants.apiRoot;
            this.apiAddress = this.apiRt + this.ctlrName;
            this.hdrs = new HttpHeaders();
            this.clientRt = Constants.clientRoot;
  }
  public getPlayerByName(name: string): Observable<Player>{

    const address = 'read_by_name/' + name;
    const req_address = this.apiAddress + address;
    let hdrs: HttpHeaders = new HttpHeaders();
    if (name == defaultPlayer.name) {
      return of(defaultPlayer)
    }
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);

    hdrs = hdrs.append('Access-Control-Allow-Methods', ['GET', 'POST'])
    hdrs = hdrs.append('content-type', 'application/json');


    console.log(hdrs)

    return this.http.get<Player>(
      req_address,
      {headers: hdrs}
    ).pipe(
      timeout(5000),
      map((a_player: Player) => {
        console.log('Player returned: ', JSON.stringify(a_player));
        return a_player;
      }))
  }
}
