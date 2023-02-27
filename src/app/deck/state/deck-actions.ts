import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';

import { Action } from '@ngrx/store';
import { DeckCard } from '../models/deckcard';

export enum deckActionTypes {
  LOAD_CARDS = '[DECK] Load Cards',
  ADD_CARD = '[DECK] Add DeckCard',
  SET_CARD = '[DECK] Set DeckCard',
  UPSERT_CARD = '[DECK] Upsert DeckCard',
  ADD_CARDS = '[DECK] Add Cards',
  UPSERT_CARDS = '[DECK] Upsert Cards',
  UPDATE_CARD = '[DECK]  Update DeckCard',
  UPDATE_CARDS = '[DECK] Update Cards',
  MAP_CARDS = '[DECK] Map Cards',
  DELETE_CARD = '[DECK] Delete DeckCard',
  DELETE_CARDS = '[DECK] Delete Cards',
  DELETE_CARDS_BY_PREDICATE = '[DECK] Delete cards by predicate',
  CLEAR_CARDS = '[DECK] Clear Cards',
}


export const loadCards = createAction(
  deckActionTypes.LOAD_CARDS,
  props<{cards:DeckCard[]}>()
);


export const addCard = createAction(
  deckActionTypes.ADD_CARD,
  props<{ card: DeckCard }>()
);
export const setCard = createAction(
  deckActionTypes.SET_CARD,
  props<{ card: DeckCard }>()
);
export const upsertCard = createAction(
  deckActionTypes.UPSERT_CARD,
  props<{ card: DeckCard }>()
);
export const addCards = createAction(
  deckActionTypes.ADD_CARDS,
  props<{ cards: DeckCard[] }>()
);
export const upsertCards = createAction(
  deckActionTypes.UPSERT_CARDS,
  props<{ cards: DeckCard[] }>()
);
export const updateCard = createAction(
  deckActionTypes.UPDATE_CARD,
  props<{ card: Update<DeckCard> }>()
);
export const updateCards = createAction(
  deckActionTypes.UPDATE_CARDS,
  props<{ cards: Update<DeckCard>[] }>()
);
export const mapCards = createAction(
  deckActionTypes.MAP_CARDS,
  props<{ entityMap: EntityMap<DeckCard> }>()
);
export const deleteCard = createAction(
  deckActionTypes.DELETE_CARD,
  props<{ id: number }>()
);
export const deleteCards = createAction(
  deckActionTypes.DELETE_CARDS,
  props<{ ids: number[] }>()
);
export const deleteCardsByPredicate = createAction(
  deckActionTypes.DELETE_CARDS_BY_PREDICATE,
  props<{ predicate: Predicate<DeckCard> }>()
);
export const clearCards = createAction(deckActionTypes.CLEAR_CARDS);






