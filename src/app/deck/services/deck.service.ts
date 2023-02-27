import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helpers/Constants';
import { DeckCard } from '../models/deckcard';
import { Observable, of } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Deck } from '../models/deck';
import * as fromShared from '../../shared/state';
import { Store, select } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private clientRt;
  gameID$: Observable<number>;
  constructor(private http: HttpClient, private sharedStore: Store<fromShared.SharedModuleState>) {
    this.ctlrName = 'decks/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.clientRt = Constants.clientRoot;
    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
  }

  public createDeck(id: number): Observable<DeckCard[]> {


    this.gameID$.subscribe((i: number) => {
      id = i


    });

    const address = 'create';
    const req_address = this.apiAddress + address;
    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['POST']);
    hdrs = hdrs.append('content-type', 'application/json');
    const item = {
      'game.id': id,
    };
    console.log('ITEM to CREATE DECK: ', id);
    this.printServiceInfo(req_address, item, hdrs);
    return this.http
      .post<DeckCard[]>(req_address, item, { headers: hdrs })
      .pipe(
        timeout(5000),
        map((deckcards: DeckCard[]) => {
          console.log(
            'Deckcards returned from create Deck: ',
            JSON.stringify(deckcards)
          );
          return deckcards;
        })
      );
  }

  // GET DEck By ID
  public deckbyid(deck_id: number | undefined): Observable<Deck> {
    const address = 'read/' + deck_id;
    const req_address = this.apiAddress + address;
    const hdrs = new HttpHeaders()
      .set('Access-Control-Allow-Origin', [
        this.apiRt,
        this.apiAddress,
        Constants.clientRoot,
      ])
      .set('Access-Control-Allow-Methods', 'POST')
      .set('content-type', 'application/json');

    return this.http.get<Deck>(req_address, { headers: hdrs }).pipe(
      timeout(5000),
      map((deck: Deck) => {
        console.log(
          'Deck returned from deckbyid in deckservice: ',
          JSON.stringify(deck)
        );
        return deck;
      })
    );
  }

  public printServiceInfo(address: string, payload: any, httpHrd: HttpHeaders) {
    console.log('urlAddress: ', address);
    console.log('HEADERS:', httpHrd);
    console.log('payload: ', JSON.stringify(payload));
  }
}

