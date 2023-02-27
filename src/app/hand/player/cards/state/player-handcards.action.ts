import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { DeckCard } from 'src/app/deck/models/deckcard';




export const loadDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Load DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const addDeckCard = createAction(
  '[PLAYER HandDeckCard/API] Add DeckCard',
  props<{ card: DeckCard }>()
);
export const setDeckCard = createAction(
  '[PLAYER HandDeckCard/API] Set DeckCard',
  props<{ card: DeckCard }>()
);
export const upsertDeckCard = createAction(
  '[PLAYER HandDeckCard/API] Upsert DeckCard',
  props<{ card: DeckCard }>()
);
export const addDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Add DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const upsertDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Upsert DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const updateDeckCard = createAction(
  '[PLAYER HandDeckCard/API] Update DeckCard',
  props<{ card: Update<DeckCard> }>()
);
export const updateDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Update DeckCards',
  props<{ cards: Update<DeckCard>[] }>()
);
export const mapDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Map DeckCards',
  props<{ entityMap: EntityMap<DeckCard> }>()
);
export const deleteDeckCard = createAction(
  '[PLAYER HandDeckCard/API] Delete DeckCard',
  props<{ id: string }>()
);
export const deleteDeckCards = createAction(
  '[PLAYER HandDeckCard/API] Delete DeckCards',
  props<{ ids: string[] }>()
);
export const deleteDeckCardsByPredicate = createAction(
  '[PLAYER HandDeckCard/API] Delete DeckCards By Predicate',
  props<{ predicate: Predicate<DeckCard> }>()
);
export const clearDeckCards = createAction('[PLAYER HandDeckCard/API] Clear DeckCards');
