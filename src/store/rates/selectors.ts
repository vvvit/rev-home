import {RootState} from '../index';
import {IRatesState} from './reducer';

export const rateSelector = (state: RootState): IRatesState => state.rates;
