import { RootState } from '../index';
import { RatesState } from './reducer';

export const rateSelector = (state: RootState): RatesState => state.rates;
