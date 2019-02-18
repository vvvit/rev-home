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
}

type RatesReducer = Reducer<IRatesState, ActionType<typeof ratesActions>>;

export const initialRatesState: IRatesState = {
    timestamp: 0,
    status: null,
    from: null,
    to: null,
    val: null
};

export const ratesReducer: RatesReducer = (state = initialRatesState, action) => {
    switch(action.type) {
        case (getType(ratesActions.fetchRatesRequest)):
            return {
                ...state,
                status: ResponseStatus.LOADING
            };
        case (getType(ratesActions.fetchRatesSuccess)):
            console.log(action);
            return {
                ...state,
                status: ResponseStatus.OK,
                ...action.payload
            };
        default:
            return state;
    }
};
