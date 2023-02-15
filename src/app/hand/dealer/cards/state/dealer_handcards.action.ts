import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Card } from 'src/app/cards/models/card';



export const loadCards = createAction(
  '[Card/API] Load Cards',
  props<{ cards: Card[] }>()
);
export const addCard = createAction(
  '[Card/API] Add Card',
  props<{ card: Card }>()
);
export const setCard = createAction(
  '[Card/API] Set Card',
  props<{ card: Card }>()
);
export const upsertCard = createAction(
  '[Card/API] Upsert Card',
  props<{ card: Card }>()
);
export const addCards = createAction(
  '[Card/API] Add Cards',
  props<{ cards: Card[] }>()
);
export const upsertCards = createAction(
  '[Card/API] Upsert Cards',
  props<{ cards: Card[] }>()
);
export const updateCard = createAction(
  '[Card/API] Update Card',
  props<{ card: Update<Card> }>()
);
export const updateCards = createAction(
  '[Card/API] Update Cards',
  props<{ cards: Update<Card>[] }>()
);
export const mapCards = createAction(
  '[Card/API] Map Cards',
  props<{ entityMap: EntityMap<Card> }>()
);
export const deleteCard = createAction(
  '[Card/API] Delete Card',
  props<{ id: string }>()
);
export const deleteCards = createAction(
  '[Card/API] Delete Cards',
  props<{ ids: string[] }>()
);
export const deleteCardsByPredicate = createAction(
  '[Card/API] Delete Cards By Predicate',
  props<{ predicate: Predicate<Card> }>()
);
export const clearCards = createAction('[Card/API] Clear Cards');
