import { RootState } from '../index';
import { ExchangeState } from './reducer';

export const exchangeSelector = (state: RootState): ExchangeState => state.exchange;
