import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, timeout } from 'rxjs';
import { of } from 'rxjs';
import { Constants } from 'src/app/helpers/Constants';
import { Hand,HandCards, HandInfo, defaultHand } from '../models/hand';

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
let item = {

};

    this.printServiceInfo(req_address, item, hdrs);

    return this.http.get<Hand>(req_address, { headers: hdrs }).pipe(
      timeout(5000),
      map((hand: Hand) => {

        console.log('Hand returned to Hand Service:getHandById: ', hand);
        return hand;
      }))
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
      'game.id': game_id
    };
    this.printServiceInfo(req_address, item, hdrs);
    return this.http.post<Hand>(req_address, item, { headers: hdrs }).pipe(
      timeout(5000),
      map((newHand: Hand) => {
        if (newHand) {
          console.log(
          'New Hand returned to Hand Service: ',
          JSON.stringify(newHand)
        );
        }

        return newHand;
      })
    );
  }

  public getHandInfo(handId: number): Observable<any>{
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
 let item = {

 };
 this.printServiceInfo(req_address, item, hdrs);
    return this.http.get<HandInfo>(req_address, { headers: hdrs }).pipe(timeout(5000), map((handInfo:any) => {
      console.log('Returned handInfo:\n', this.printServiceInfo(req_address, handInfo, hdrs));
      return handInfo;
}))
  }

  public getHandCards(handId: number): Observable<HandCards>{
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
      this.printServiceInfo(req_address, item, hdrs);
    return this.http.get<HandCards>(req_address, { headers: hdrs }).pipe(timeout(5000), map((handCards: HandCards) => {
      console.log(
        'Returned handCards to HandService:\n',
        this.printServiceInfo(req_address, handCards, hdrs));
      return handCards;
    }))
  }



  public printServiceInfo(address: string, payload: any, httpHrd: HttpHeaders) {
    console.log('urlAddress: ', address);
    console.log('HEADERS:', httpHrd);
    console.log('payload: ', JSON.stringify(payload));
  }
}
