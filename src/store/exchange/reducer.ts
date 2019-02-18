import {Reducer} from 'redux';
import {ActionType, getType} from 'typesafe-actions';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyName} from '../../models/Currency';
import * as exchangeActions from './actions';

export interface IExchangeState {
    readonly selectedAction: CurrencyExchangeType;
    readonly value: string;
    readonly sellCurrnecy: CurrencyName;
    readonly buyCurrency: CurrencyName;
}

type ExchangeReducer = Reducer<IExchangeState, ActionType<typeof exchangeActions>>;

export const initialExchangeState: IExchangeState = {
    selectedAction: CurrencyExchangeType.BUY,
    value: '0',
    sellCurrnecy: CurrencyName.USD,
    buyCurrency: CurrencyName.EUR
};

export const exchangeReducer: ExchangeReducer = (state = initialExchangeState, action) => {
        switch(action.type) {
            case (getType(exchangeActions.changeValue)):
                return {
                    ...state,
                    value: action.payload,
                    selectedAction: action.meta
                };
            default:
                return state;
        }
    };
