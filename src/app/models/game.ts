
export enum GameEnum {
  PRE = 'PRE',
  ACTIVE = 'ACTIVE',
  COMPLETE = 'COMPLETE',
}

// export enum GameEnum {
//   PRE ,
//   ACTIVE ,
//   COMPLETE ,
// }
export interface Game {
  id: number;
  started_at: Date;
  finished_at: Date;
  game_status: string;
}
