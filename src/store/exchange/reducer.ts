import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { CurrencyExchangeType } from '../../models/Exchange';
import { CurrencyName } from '../../models/Currency';
import * as exchangeActions from './actions';

export interface ExchangeState {
    readonly selectedAction: CurrencyExchangeType;
    readonly value: string;
    readonly sellCurrency: CurrencyName;
    readonly buyCurrency: CurrencyName;
}

type ExchangeReducer = Reducer<ExchangeState, ActionType<typeof exchangeActions>>;

export const initialExchangeState: ExchangeState = {
    selectedAction: CurrencyExchangeType.SELL,
    value: '0',
    sellCurrency: CurrencyName.USD,
    buyCurrency: CurrencyName.EUR
};

export const exchangeReducer: ExchangeReducer = (state = initialExchangeState, action) => {
        switch (action.type) {
            case (getType(exchangeActions.changeValue)):
                return {
                    ...state,
                    value: action.payload,
                    selectedAction: action.meta
                };

            case (getType(exchangeActions.changeCurrency)):
                const newState = {
                    ...state
                };

                if (action.meta === CurrencyExchangeType.SELL) {
                    newState.sellCurrency = action.payload;
                    if (newState.sellCurrency === newState.buyCurrency) {
                        newState.buyCurrency = state.sellCurrency;
                    }
                } else {
                    newState.buyCurrency = action.payload;
                    if (newState.buyCurrency === newState.sellCurrency) {
                        newState.sellCurrency = state.buyCurrency;
                    }
                }

                return newState;

            default:
                return state;
        }
    };
