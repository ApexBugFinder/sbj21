import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Player, defaultPlayer } from '../user/models/player';
import { Game } from '../models/game';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'games/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.hdrs = new HttpHeaders();
    this.clientRt = Constants.clientRoot;
  }

  public create(player: Player, dealer: Player): Observable<Game> {
  
    const address = 'create_game';
    const req_address = this.apiAddress + address;
    console.log('REQ ADDRESS: ', req_address);
    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    console.log('REQ ADDRESS: ', req_address);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['POST']);
    hdrs = hdrs.append('content-type', 'application/json');
    let item = {
      'player.id': player.id,
      'dealer.id': dealer.id,
    };
    console.log('item to send: ', item);

    this.printServiceInfo(req_address, item, hdrs);
    return this.http.post<Game>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((newGame: Game) => {
        console.log(
          'New Game returned to Game Service: ',
          JSON.stringify(newGame)
        );
        return newGame;
      })
    );
  }

  public printServiceInfo(address: string, payload: any, httpHrd: HttpHeaders) {
    console.log('urlAddress: ', address);
    console.log('HEADERS:', httpHrd);
    console.log('payload: ', JSON.stringify(payload));
  }
}
