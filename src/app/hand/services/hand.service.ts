import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, elementAt, map, timeout } from 'rxjs';
import { of } from 'rxjs';
import { Constants } from 'src/app/helpers/Constants';
import { Hand,HandCards, HandInfo, defaultHand } from '../models/hand';
import { DeckCard } from 'src/app/deck/models/deckcard';
import { PrintServiceInfo } from 'src/app/shared/utils/printService';

@Injectable({
  providedIn: 'root',
})
export class HandService {
  private ctlrName;
  private apiRt;
  private apiAddress;
  private hdrs;
  private clientRt;
  constructor(private http: HttpClient) {
    this.ctlrName = 'hands/';
    this.apiRt = Constants.apiRoot;
    this.apiAddress = this.apiRt + this.ctlrName;
    this.hdrs = new HttpHeaders();
    this.clientRt = Constants.clientRoot;
  }

  public getHandStatus(hand_id: Number | undefined) {
    return;
  }
  public getHandById(hand_id: number): Observable<Hand> {
    const address = 'read/' + hand_id;
    const req_address = this.apiAddress + address;

    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);

    hdrs = hdrs.append('Access-Control-Allow-Methods', ['GET']);
    hdrs = hdrs.append('content-type', 'application/json');
    let item = {};

    PrintServiceInfo.printServiceInfo('BEFORE SEND', req_address, item, hdrs);

    return this.http.get<Hand>(req_address, { headers: hdrs }).pipe(
      timeout(5000),
      map((hand: Hand) => {
        PrintServiceInfo.printServiceInfo(
          'RETURN DATA To HAND SERVICE',
          req_address,
          hand,
          hdrs
        );
        console.log('Hand returned to Hand Service:getHandById: ', hand);
        return hand;
      })
    );
  }

  public createHand(player_id: number, game_id: number): Observable<Hand> {
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
    let item = {
      'user.id': player_id,
      'game.id': game_id,
    };
    PrintServiceInfo.printServiceInfo('BEFORE SEND', req_address, item, hdrs);
    return this.http.post<Hand>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((newHand: Hand) => {
        if (newHand) {
          PrintServiceInfo.printServiceInfo(
            'RETURN DATA TO HAND SERVICE',
            req_address,
            newHand,
            hdrs
          );
        }

        return newHand;
      })
    );
  }

  public getHandInfo(handId: number): Observable<any> {
    const address = 'read/info/' + handId;
    const req_address = this.apiAddress + address;

    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['GET']);
    hdrs = hdrs.append('content-type', 'application/json');
    let item = {};
    PrintServiceInfo.printServiceInfo('BEFORE SEND', req_address, item, hdrs);
    return this.http.get<HandInfo>(req_address, { headers: hdrs }).pipe(
      timeout(5000),
      map((handInfo: any) => {
        PrintServiceInfo.printServiceInfo(
          'RETURN DATA TO HAND SERVICE',
          req_address,
          handInfo,
          hdrs
        );
        return handInfo;
      })
    );
  }

  public getHandCards(handId: number): Observable<HandCards> {
    const address = 'read/cards/' + handId;
    const req_address = this.apiAddress + address;

    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['GET']);
    hdrs = hdrs.append('content-type', 'application/json');
    let item = {};
    PrintServiceInfo.printServiceInfo('BEFORE SENd', req_address, item, hdrs);
    return this.http.get<HandCards>(req_address, { headers: hdrs }).pipe(
      timeout(5000),
      map((handCards: HandCards) => {
        PrintServiceInfo.printServiceInfo(
          'RETURN DATA to HAND SERVICE',
          req_address,
          handCards,
          hdrs
        );
        return handCards;
      })
    );
  }

  public addCardsToHand(cards: DeckCard[], handId: number): Observable<Hand> {
    const address = 'add_to_hand/' + handId;
    const req_address = this.apiAddress + address;

    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['PUT']);
    hdrs = hdrs.append('content-type', 'application/json');
    let item = [];
    cards.forEach((element) => {
      let b = {
        'card.id': element.id,
        'deck.id': element.deck_id,
      };
      item.push(b);
    });

    PrintServiceInfo.printServiceInfo('BEFORE SEND', req_address, item, hdrs);
    return this.http.put<Hand>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((returnObject: Hand) => {
        PrintServiceInfo.printServiceInfo(
          'RETURN DATA to HAND SERVICE',
          req_address,
          returnObject,
          hdrs
        );

        return returnObject;
      })
    );
  }

  public updatePlayerHandStatus(
    handId: number,
    handStatus: string
  ): Observable<Hand> {


    // CREATE ADDRESS
    const address ='updatehandstatus/' +  handId;
    const req_address = this.apiAddress + address;


     // CREATE HEADERS
    let hdrs = new HttpHeaders();
    hdrs = hdrs.append('Access-Control-Allow-Origin', [
      this.apiRt,
      this.apiAddress,
      Constants.clientRoot,
    ]);
    hdrs = hdrs.append('Access-Control-Allow-Methods', ['PUT']);
    hdrs = hdrs.append('content-type', 'application/json');

    // CREATE BODY
    let item = {
      status: handStatus,
    };

    // PRINT REQUEST
    PrintServiceInfo.printServiceInfo('HTTP REQUEST', req_address, item, hdrs);

    return this.http.put<Hand>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((returnObject: Hand) => {

        // PRINT RESPONSE
        PrintServiceInfo.printServiceInfo(
          'HTTP RESPONSE',
          req_address,
          returnObject,
          hdrs
        );

        return returnObject;
      })
    );
  }
}
