import { DeckCard } from "src/app/deck/models/deckcard";
import { Player } from "src/app/user/models/player";

    export interface Hand {
      id: number,
      status: string,
      player_limit: Number,
      h_value: number,
      l_value: number,
      user_id?: number,
      game_id?: number
};


export interface HandInfo{
  player: Player,
  cards: DeckCard[],
  hand: Hand
}
export const defaultHand: Hand = {
  id: 1,
  status: 'DEFAULT',
  player_limit: 0,
  h_value: 0,
  l_value: 0,
  user_id: 1
};

export interface HandCards
{
  cards: DeckCard[],
    hand: Hand
};
