import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/helpers/Constants';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Player, defaultPlayer } from '../user/models/player';
import { Game } from '../models/game';
import { Store } from '@ngrx/store';
import * as fromShared from '../shared/state';
import * as sharedActions from '../shared/state/shared.actions';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  private actionSent = 'GAME SERVICE SENT TO DB';
  private actionReturned = 'GAME SERVICE RETURNED FROM DB';
  private gameID$: Observable<number>;
  constructor(
    private http: HttpClient,
    private sharedStore: Store<fromShared.SharedModuleState>
  ) {
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

    this.printServiceInfo(this.actionSent,req_address, item, hdrs);
    return this.http.post<Game>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((newGame: Game) => {

        this.printServiceInfo(this.actionReturned , req_address, item, hdrs);
        return newGame;
      })
    );
  }

  public updateGameStatus(itemToUpdate: Game): Observable<Game> {
const address = 'update/' +  itemToUpdate.id;
const req_address = this.apiAddress + address;
const method = ' from updateGameStatus';
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
  game_status: itemToUpdate.game_status
};
    console.log('item to send: ', item);
    let action = this.actionSent + method;
    this.printServiceInfo(action, req_address, item, hdrs);
    return this.http.put<Game>(req_address, item, { headers: hdrs })
      .pipe(
        timeout(5000),
        map((updatedGame: Game) => {
          let action = this.actionReturned + method;
          this.printServiceInfo(action, req_address, updatedGame, hdrs);

          return updatedGame
        })
      );
  }

  public printServiceInfo(action:string, address: string, payload: any, httpHrd: HttpHeaders) {
    console.log('SERVICE: ', action);
    console.log('urlAddress: ', address);
    console.log('HEADERS:', httpHrd);
    console.log('payload: ', JSON.stringify(payload));
  }
}
