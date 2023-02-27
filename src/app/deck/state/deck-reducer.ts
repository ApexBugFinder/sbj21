import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { defaultCard, Card } from '../../cards/models/card';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as DeckActions from './deck-actions';
import { DeckCard } from '../models/deckcard';

export interface DeckState extends EntityState<DeckCard> {
  ids: number[];
  entities: { [key: number]: DeckCard | undefined };
  selectedCardId: number | 0;
  error: string;
}

export function selectCardId(a: DeckCard): number {
  return a.id;
}

export function sortByValue(a: DeckCard, b: DeckCard): number {
  let compare = a.h_value - b.h_value;
  if (compare > 1) {
    return 1;
  } else if (compare < 1) {
    return -1;
  } else {
    return 0;
  }
}

export const adapter: EntityAdapter<DeckCard> = createEntityAdapter<DeckCard>({
  selectId: selectCardId,
  sortComparer: sortByValue,

});

export const initialState: DeckState = adapter.getInitialState({
  // additional entity state properties
  selectedCardId: 0,
  ids: [],
  entities: {},
  error:''
});
const cardReducer = createReducer(
  initialState,
  on(DeckActions.addCard, (state, { card }) => {
    return adapter.addOne(card, state);
  }),
  on(DeckActions.setCard, (state, { card }) => {
    return adapter.setOne(card, state);
  }),
  on(DeckActions.upsertCard, (state, { card }) => {
    return adapter.upsertOne(card, state);
  }),
  on(DeckActions.addCards, (state, { cards }) => {
    return adapter.addMany(cards, state);
  }),
  on(DeckActions.upsertCards, (state, { cards }) => {
    return adapter.upsertMany(cards, state);
  }),
  on(DeckActions.updateCard, (state, { card }) => {
    return adapter.updateOne(card, state);
  }),
  on(DeckActions.updateCards, (state, { cards }) => {
    return adapter.updateMany(cards, state);
  }),
  //  on(DeckActions.mapCard, (state, { entityMap }) => {
  //    return adapter.mapOne(entityMap, state);
  //  }),
  on(DeckActions.mapCards, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(DeckActions.deleteCard, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(DeckActions.deleteCards, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(DeckActions.deleteCardsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),

  on(DeckActions.loadCards, (state, { cards }) => {
    return adapter.setAll(cards, state);
}),

  on(DeckActions.clearCards, (state) => {
    return adapter.removeAll({ ...state, selectedCardId: 0 });
  })
);

export function reducer(
  state: DeckState | undefined,
  action: Action
) {
  return cardReducer(state, action);
}
