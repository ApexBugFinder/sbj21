export interface DeckCard {
  id: number;
  deck_id: number;
  face: string;
  suite: string;
  h_value: number;
  l_value: number;
  value: number;
  url: string;
  used: Boolean;
}

export const defaultDeckCard: DeckCard = {
  id: 0,
  deck_id: 1,
  face: 'T1',
  suite: 'Test',
  h_value: 5,
  l_value: 5,
  value: 5,
  url: 'https://firebasestorage.googleapis.com/v0/b/resourcery-6cdb0.appspot.com/o/sb21%2Fimages%2FArtwork%2010.png?alt=media&token=2c358a5a-fb24-4094-9ddb-1759cbf66bf7',
  used: false,
};
