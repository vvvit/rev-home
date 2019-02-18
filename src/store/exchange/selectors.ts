import {RootState} from '../index';
import {IExchangeState} from './reducer';

export const exchangeSelector = (state: RootState): IExchangeState => state.exchange;
