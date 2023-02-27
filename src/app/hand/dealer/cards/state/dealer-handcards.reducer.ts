import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as HandDeckCardActions from './dealer-handcards.action';
import { DeckCard } from 'src/app/deck/models/deckcard';
// import { selectAllProjects, selectCurrentProjectId } from '.';

export interface DealerHandDeckCardsState extends EntityState<DeckCard> {
  ids: number[];
  entities: { [key: number]: DeckCard | undefined };
  selectedDeckCardId: number | 0;
}

export function selectDeckCardId(a: DeckCard): number {
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
  selectId: selectDeckCardId,
  sortComparer: sortByValue,
});

export const initialState: DealerHandDeckCardsState = adapter.getInitialState({
  // additional entity state properties
  selectedDeckCardId: 0,
  ids: [],
  entities: {},
});

const cardReducer = createReducer(
  initialState,
  on(HandDeckCardActions.addDeckCard, (state, { card }) => {
    return adapter.addOne(card, state);
  }),
  on(HandDeckCardActions.setDeckCard, (state, { card }) => {
    return adapter.setOne(card, state);
  }),
  on(HandDeckCardActions.upsertDeckCard, (state, { card }) => {
    return adapter.upsertOne(card, state);
  }),
  on(HandDeckCardActions.addDeckCards, (state, { cards }) => {
    return adapter.addMany(cards, state);
  }),
  on(HandDeckCardActions.upsertDeckCards, (state, { cards }) => {
    return adapter.upsertMany(cards, state);
  }),
  on(HandDeckCardActions.updateDeckCard, (state, { card }) => {
    return adapter.updateOne(card, state);
  }),
  on(HandDeckCardActions.updateDeckCards, (state, { cards }) => {
    return adapter.updateMany(cards, state);
  }),
  //  on(HandDeckCardActions.mapDeckCard, (state, { entityMap }) => {
  //    return adapter.mapOne(entityMap, state);
  //  }),
  on(HandDeckCardActions.mapDeckCards, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(HandDeckCardActions.deleteDeckCard, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(HandDeckCardActions.deleteDeckCards, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(HandDeckCardActions.deleteDeckCardsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),

  on(HandDeckCardActions.loadDeckCards, (state, { cards }) => {
    return adapter.setAll(cards, state);
  }),

  on(HandDeckCardActions.clearDeckCards, (state) => {
    return adapter.removeAll({ ...state, selectedDeckCardId: 0 });
  })
);

export function reducer(
  state: DealerHandDeckCardsState | undefined,
  action: Action
) {
  return cardReducer(state, action);
}
