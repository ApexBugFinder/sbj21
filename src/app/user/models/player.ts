import { Hand } from "src/app/hand/models/hand";

export interface Player{
  id: number;
  name: string;
  limit: number;
  created_at: Date | undefined;
  hand?:Hand
}

export const defaultPlayer = {
  id: 1,
  name: '',
  limit: 0,
  created_at: undefined,
};
