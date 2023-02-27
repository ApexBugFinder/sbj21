import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, range } from 'rxjs';
import { DeckCard, defaultDeckCard } from 'src/app/deck/models/deckcard';
import { DeckService } from 'src/app/deck/services/deck.service';
import * as fromDeck from './../index';

import * as deckShellActions from './state/deckshell-actions';
import * as deckAction from '../state/deck-actions';
import { Store, props, select } from '@ngrx/store';
import * as fromShared from '../../shared/state';
import * as sharedActions from '../../shared/state/shared.actions';
import { GameEnum } from 'src/app/models/game';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import * as fromHand from '../../hand/index';
import * as playerHandCardsActions from '../../hand/player/cards/state/player-handcards.action';
import * as dealerHandCardsActions from '../../hand/dealer/cards/state/dealer-handcards.action';
import * as  dealerHandActions from '../../hand/dealer/shell/state/dealer-hand.actions';
import * as playerHandActions from '../../hand/player/shell/state/player-hand.actions';
@Component({
  selector: 'app-deck-shell',
  templateUrl: './deck-shell.component.html',
  styleUrls: ['./deck-shell.component.scss'],
})
export class DeckShellComponent implements OnInit {
  @Input() gameId: number;
  player$: Observable<Player>;
  player: Player = defaultPlayer;
  dealer$: Observable<Player>;
  dealer: Player = defaultPlayer;
  // thegameDeck: DeckCard[] = [];
  bkCard: DeckCard = defaultDeckCard;
  bkCard$: Observable<DeckCard>;

  gameStatus$: Observable<string>;
  playerTurn$: Observable<Player>;
  playersTurn: Player;
  playerCardsCount$: Observable<number>;
  playerCardsCount: number;
  dealerCardsCount$: Observable<number>;
  dealerCardsCount: number;
  deck$: Observable<DeckCard[]>;
  deck: DeckCard[] = [];
  deckCount$: Observable<number>;
  deckCount: number;
  maxCardsInHand: number = 5;
  playerHandCards$: Observable<DeckCard[]>;
  playerHandCards: DeckCard[] = [];
  displayCards$: Observable<DeckCard[]>;
  displayCards: DeckCard[] = [];
  cardsPulledFromDeck: DeckCard[] = [];
  constructor(
    private deckService: DeckService,
    private deckshellStore: Store<fromDeck.DeckModuleState>,

    private sharedStore: Store<fromShared.SharedModuleState>,
    private handStore: Store<fromHand.HandModuleState>
  ) {
    this.bkCard$ = this.deckshellStore.pipe(select(fromDeck.getBackCard));
    this.displayCards$ = this.deckshellStore.pipe(
      select(fromDeck.getDisplayCards)
    );

    this.gameStatus$ = this.sharedStore.pipe(select(fromShared.getGameStatus));
    this.dealer$ = this.sharedStore.pipe(select(fromShared.getDealer));
    this.player$ = this.sharedStore.pipe(select(fromShared.getPlayer));
    this.playerTurn$ = this.sharedStore.pipe(select(fromShared.getWhoseTurn));
    this.playerCardsCount$ = this.handStore.pipe(
      select(fromHand.getPlayerHandCardsCount)
    );
    this.dealerCardsCount$ = this.handStore.pipe(
      select(fromHand.getDealerHandCardsCount)
    );
    this.deck$ = this.deckshellStore.pipe(select(fromDeck.getDeck));
    this.deckCount$ = this.deckshellStore.pipe(select(fromDeck.getDeckCount));
    this.playerHandCards$ = this.handStore.pipe(
      select(fromHand.getPlayerHandCards)
    );
  }

  ngOnInit(): void {
    this.player$.subscribe((value: Player) => {
      this.player = value;
    });
    this.dealer$.subscribe({
      next: (value: Player) => {
        this.dealer = value;
      },
      complete: () =>
        console.log('Completed Successfully fetching Dealer from Shared State'),
      error: (err) =>
        console.log(
          'OOps somethign went wrong when fetching Dealer from  Shared state',
          err
        ),
    });

    this.playerTurn$.subscribe({
      next: (player: Player) => {
        this.playersTurn = player;
      },
      complete: () =>
        console.log(
          'Completed Successfully fetching which playersTurn it is from SharedState'
        ),
      error: (err) =>
        console.log(
          'OOps somethign went wrong when fetching playersTurn from SharedState ',
          err
        ),
    });

    this.gameStatus$.subscribe((status: string) => {
      console.log('status: ', status);
      console.log('GAME Enum: ', GameEnum.PRE);
      console.log('GAME Enum to String: ', GameEnum.PRE.toString());
      if (status == GameEnum.PRE) {
        // Start Game by updating Game Status
        this.sharedStore.dispatch(new sharedActions.ChangeGameStatus2Active());
        // SET whose turn it is:

        // Player goes first:
        this.sharedStore.dispatch(new sharedActions.SetUserTurn(this.player));
      }
      this.deck$.subscribe({
        next: (gameDeck: DeckCard[]) => {
          this.deck = gameDeck;
        },
        complete: () => console.log('Completed Successfully fetching  from'),
        error: (err) =>
          console.log('OOps somethign went wrong when fetching  from ', err),
      });
      this.deckCount$.subscribe({
        next: (count: number) => {
          this.deckCount = count;
        },
        complete: () =>
          console.log(
            'Completed Successfully fetching deckCount from the Deck Store'
          ),
        error: (err) =>
          console.log(
            'OOps somethign went wrong when fetching the deckCount from the deckstore',
            err
          ),
      });
      this.dealerCardsCount$.subscribe({
        next: (count: number) => {
          this.dealerCardsCount = count;
        },
        complete: () => console.log('Completed Successfully fetching  from'),
        error: (err) =>
          console.log('OOps somethign went wrong when fetching  from ', err),
      });
      this.playerCardsCount$.subscribe({
        next: (count: number) => {
          this.playerCardsCount = count;

          if (count == 5) {
            // DEAL 2 CARDS
              this.sharedStore.dispatch(new sharedActions.SetUserTurn(this.dealer))
            count++;
          } else {
            // DEAL 1 CARD
          }
        },
        complete: () => console.log('Completed Successfully fetching  from'),
        error: (err) =>
          console.log('OOps somethign went wrong when fetching  from ', err),
      });
    });

    this.displayCards$.subscribe({
      next: (deckcards: DeckCard[]) => {
        this.displayCards = deckcards;
      },
      complete: () => console.log('Completed Successfully fetching  from'),
      error: (err) =>
        console.log('OOps somethign went wrong when fetching  from ', err),
    });
  }

  dealCards() {
    //  Get whose turn it is

    // Find out how many cards do I have
    let dispCds: DeckCard[] = [];
    console.log("player's card count: ", this.playerCardsCount);
    let i = 0;
    // Decide how cards to pull
    let numberOfCardsToPick = 0;
    if (this.playersTurn.name == 'dealer') {
            if (this.dealerCardsCount == 0) {
              numberOfCardsToPick = 2;
            } else if (this.dealerCardsCount > 0 && this.dealerCardsCount < 5) {
              numberOfCardsToPick = 1
            } else {
              numberOfCardsToPick = 0;
          }
    } else {
            if (this.playerCardsCount == 0) {
          numberOfCardsToPick = 2;
            } else if (this.playerCardsCount > 0 && this.playerCardsCount < 5) {
          numberOfCardsToPick = 1;
            } else {
              numberOfCardsToPick = 0;
        }
    }


    // Pull cards from deck
    let pickedCards: DeckCard[] = this.getCardsFromDeck(numberOfCardsToPick);

    //  Set cards to displaycards
    this.setDisplayCards(pickedCards);


    // Assign cards to Player
    if (this.playersTurn.name == 'dealer') {
      // update backend
      console.log('CARDS PICKED for dealer', pickedCards);
      this.handStore.dispatch(new dealerHandActions.AddCardsToDealerHand);
      // addcards to deck
      this.handStore.dispatch(
        dealerHandCardsActions.addDeckCards({ cards: pickedCards })
      );
    } else {
      // update backend
      this.handStore.dispatch(new playerHandActions.AddCardsToPlayerHand);
      // addcards to deck
      this.handStore.dispatch(
        playerHandCardsActions.addDeckCards({ cards: pickedCards })
      );
    }

    // Delete cards from deck
    this.deleteCardsFromDeck(pickedCards);

    // Add in a timeout for 3 seconds
    // Delete displaycards
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      this.deckshellStore.dispatch(new deckShellActions.ClearDisplayCards);
    }, 3000)



  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getCardsFromDeck(numberOfcardsToPick: number): DeckCard[] {
    let i = 0;
    let pickedCards: DeckCard[] = [];
    do {
      let ind = this.randomIntFromInterval(0, this.deck.length).valueOf();
      console.log('Random Number: ', ind);
      console.log('DEck count: ', this.deck.length);
      let playerspick: DeckCard;
      playerspick = this.deck[ind];
      pickedCards.push(playerspick);
      i++;
    } while (i >= 0 && i < numberOfcardsToPick);
    console.log('DeckCards Picked from Deck', pickedCards);
    return pickedCards;
  }

  deleteCardsFromDeck(deckCardsToDelete: DeckCard[]) {
    let idsTodelete: number[] = [];
    deckCardsToDelete.forEach(element => {
      idsTodelete.push(element.id);
    });

    this.deckshellStore.dispatch(deckAction.deleteCards({ ids: idsTodelete }));
    console.log('deckCards removed from Deck', deckCardsToDelete);
  }

  setDisplayCards(displayCards: DeckCard[]) {
    this.deckshellStore.dispatch(
      new deckShellActions.SetDisplayCards(displayCards)
    );
  }
}
