import {Reducer} from 'redux';

interface ExchangeCard {
    currency: string;
    value: number;
}

export interface IExchangeState {
    buy: ExchangeCard | null;
    sell: ExchangeCard | null;
}

export const initialExchangeState: IExchangeState = {
    buy: null,
    sell: null
};

export const exchangeReducer: Reducer = (state = initialExchangeState) => {
    return state;
};
