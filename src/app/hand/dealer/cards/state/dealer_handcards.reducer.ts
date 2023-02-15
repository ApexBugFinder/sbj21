import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { defaultCard, Card } from '../../../../cards/models/card';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as HandCardActions from './dealer_handcards.action';
// import { selectAllProjects, selectCurrentProjectId } from '.';


export interface DealerHandCardsState extends EntityState<Card>{
  ids: number[],
  entities: { [key: number]: Card | undefined };
  selectedCardId: number | 0;
}


export function selectCardId(a: Card): number {

  return a.id;
}
export function sortByValue(a: Card, b: Card): number {
  let compare =
    (a.h_value) - (b.h_value);
  if (compare > 1) {
    return 1;
  } else if (compare < 1) {
    return -1;
  } else {
    return 0;
  }
}

export const adapter: EntityAdapter<Card> = createEntityAdapter<Card>({
  selectId: selectCardId,
  sortComparer: sortByValue

});

export const initialState: DealerHandCardsState = adapter.getInitialState({
  // additional entity state properties
  selectedCardId: 0,
  ids: [],
  entities: {},
});


const cardReducer = createReducer(
  initialState,
  on(HandCardActions.addCard, (state, { card }) => {
    return adapter.addOne(card, state);
  }),
  on(HandCardActions.setCard, (state, { card }) => {
    return adapter.setOne(card, state);
  }),
  on(HandCardActions.upsertCard, (state, { card }) => {
    return adapter.upsertOne(card, state);
  }),
  on(HandCardActions.addCards, (state, { cards }) => {
    return adapter.addMany(cards, state);
  }),
  on(HandCardActions.upsertCards, (state, { cards }) => {
    return adapter.upsertMany(cards, state);
  }),
  on(HandCardActions.updateCard, (state, { card}) => {
    return adapter.updateOne(card, state);
  }),
  on(HandCardActions.updateCards, (state, { cards }) => {
    return adapter.updateMany(cards, state);
  }),
//  on(HandCardActions.mapCard, (state, { entityMap }) => {
//    return adapter.mapOne(entityMap, state);
//  }),
  on(HandCardActions.mapCards, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(HandCardActions.deleteCard, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(HandCardActions.deleteCards, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(HandCardActions.deleteCardsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),

  on(HandCardActions.loadCards, (state, { cards }) => {
    return adapter.setAll(cards, state);
  }),

  on(HandCardActions.clearCards, state => {
    return adapter.removeAll({ ...state, selectedCardId: 0 });
  })
);

export function reducer(state: DealerHandCardsState | undefined, action: Action) {
  return cardReducer(state, action);
}



