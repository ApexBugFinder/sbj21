import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helpers/Constants';
import { DeckCard } from '../models/deckcard';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'decks/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.clientRt = Constants.clientRoot;

  }

  public createDeck(id:Number): Observable<DeckCard[]> {
    const address = 'create';
    const req_address = this.apiAddress + address;
    let hdrs = new HttpHeaders()
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', 'POST');
    hdrs = hdrs.append('content-type', 'application/json');
    const item = {
        "game.id":id
    }
    console.log('ITEM to CREATE DECK: ', id)
    return this.http.post<DeckCard[]>(
      req_address,
      item,
      { headers: hdrs }
    ).pipe(
      timeout(5000),
      map((deckcards: DeckCard[]) => {
        console.log('Deckcards returned from create Deck: ', JSON.stringify(deckcards))
        return deckcards;
      })
    )
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


    return this.http.get<Deck>(
      req_address,
      { headers: hdrs }
    ).pipe(timeout(5000),
      map((deck: Deck) => {
        console.log('Deck returned from deckbyid in deckservice: ', JSON.stringify(deck));
        return deck;
      }

      ))

  }




}

