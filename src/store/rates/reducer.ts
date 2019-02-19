import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';

import {CurrencyName} from '../../models/Currency';
import * as ratesActions from './actions';

const enum ResponseStatus {
    LOADING = 'loading',
    OK = 'ok',
    ERROR = 'error'
}

export interface IRatesState {
    readonly timestamp: number;
    readonly status: ResponseStatus | null;
    readonly from: CurrencyName | null;
    readonly to: CurrencyName | null;
    readonly val: number | null;
    readonly error: string | null;
}

type RatesReducer = Reducer<IRatesState, ActionType<typeof ratesActions>>;

export const initialRatesState: IRatesState = {
    timestamp: 0,
    status: null,
    from: null,
    to: null,
    val: null,
    error: null
};

export const ratesReducer: RatesReducer = (state = initialRatesState, action) => {
    switch(action.type) {
        case (getType(ratesActions.fetchRatesRequest)):
            return {
                ...state,
                status: ResponseStatus.LOADING
            };
        case (getType(ratesActions.fetchRatesSuccess)):
            if (state.timestamp > action.payload.timestamp) {
                return state;
            }

            return {
                ...state,
                status: ResponseStatus.OK,
                ...action.payload
            };
        case (getType(ratesActions.fetchRatesError)):
            return {
                ...initialRatesState,
                status: ResponseStatus.ERROR,
                error: action.payload
            };
        default:
            return state;
    }
};
