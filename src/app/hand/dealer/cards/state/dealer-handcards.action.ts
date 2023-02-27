import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { DeckCard } from 'src/app/deck/models/deckcard';




export const loadDeckCards = createAction(
  '[DeckCard/API] Load DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const addDeckCard = createAction(
  '[DeckCard/API] Add DeckCard',
  props<{ card: DeckCard }>()
);
export const setDeckCard = createAction(
  '[DeckCard/API] Set DeckCard',
  props<{ card: DeckCard }>()
);
export const upsertDeckCard = createAction(
  '[DeckCard/API] Upsert DeckCard',
  props<{ card: DeckCard }>()
);
export const addDeckCards = createAction(
  '[DeckCard/API] Add DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const upsertDeckCards = createAction(
  '[DeckCard/API] Upsert DeckCards',
  props<{ cards: DeckCard[] }>()
);
export const updateDeckCard = createAction(
  '[DeckCard/API] Update DeckCard',
  props<{ card: Update<DeckCard> }>()
);
export const updateDeckCards = createAction(
  '[DeckCard/API] Update DeckCards',
  props<{ cards: Update<DeckCard>[] }>()
);
export const mapDeckCards = createAction(
  '[DeckCard/API] Map DeckCards',
  props<{ entityMap: EntityMap<DeckCard> }>()
);
export const deleteDeckCard = createAction(
  '[DeckCard/API] Delete DeckCard',
  props<{ id: string }>()
);
export const deleteDeckCards = createAction(
  '[DeckCard/API] Delete DeckCards',
  props<{ ids: string[] }>()
);
export const deleteDeckCardsByPredicate = createAction(
  '[DeckCard/API] Delete DeckCards By Predicate',
  props<{ predicate: Predicate<DeckCard> }>()
);
export const clearDeckCards = createAction('[DeckCard/API] Clear DeckCards');
