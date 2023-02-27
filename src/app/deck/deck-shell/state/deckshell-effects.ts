import { Injectable } from "@angular/core";
import { Observable, catchError, map, mergeMap, of, tap } from "rxjs";
import * as fromShared from '../../../shared/state';
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromDeckShell from './';
import * as deckshellActions from './deckshell-actions';
import * as fromDeck from '../../state';
import * as deckActions from '../../state/deck-actions';
import { DeckService } from "../../services/deck.service";
import { DeckCardService } from '../../services/deckcard.service';
import { DeckCard, defaultDeckCard } from "../../models/deckcard";
@Injectable({
  providedIn: 'root'
})
export class DeckShellEffects {
  gameID: number;
  gameID$: Observable<number>;
  constructor(
    private deckService: DeckService,
    private deckcardService: DeckCardService,
    private sharedStore: Store<fromShared.SharedModuleState>,
    private deckShellStore: Store<fromDeckShell.State>,
    private deckStore: Store<fromDeck.State>,
    private action$: Actions
  ) {
    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
    this.gameID$.subscribe((i: number) => (this.gameID = i));
  }

  LoadDeck$ = createEffect(() =>
    this.action$.pipe(
      ofType(deckshellActions.deckshellActionTypes.LOAD_DECK),
      mergeMap((action: deckshellActions.LoadDeck) =>
        this.deckService.createDeck(action.payload).pipe(
          tap(() => console.log(`the gameID: ${JSON.stringify(action.payload)}`)),
          tap((payload) =>
            console.log('NGRX EFFECT - CREATE DECK return payload  of DeckCards from BackEnd', payload)
          ),
          map((deck: DeckCard[]) => {
            let bkCard: DeckCard = defaultDeckCard;
            deck.forEach((element) => {
              if (element.face === 'BK1') {
                bkCard = element;
              }
            });
            if (bkCard !== defaultDeckCard) {
              this.deckShellStore.dispatch(new deckshellActions.SetDeckBackCard(bkCard));
              this.deckShellStore.dispatch(new deckshellActions.SetDeckID(bkCard.deck_id));

              const index = deck.indexOf(bkCard, 0);
              if (index > -1) {
                deck.splice(index, 1);
              }
              this.deckStore.dispatch(deckActions.loadCards({ cards:deck }))
            }
            return new deckshellActions.LoadDeckSuccess(deck);
          }),
          catchError((err)=> of(new deckshellActions.LoadDeckFail(err)))
        )
      )
    )
  );
}
