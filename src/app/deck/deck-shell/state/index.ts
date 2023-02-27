import * as fromDeckRoot from '../../index';
import { DeckShellState } from './deckshell-reducer';

export interface State extends fromDeckRoot.DeckModuleState
{
  deckShellState: DeckShellState
}
