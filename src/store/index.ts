import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import {IWalletState, walletReducer} from "./wallet/reducer";
import {IExchangeState, exchangeReducer} from "./exchange/reducer";

interface RootState {
    wallet: IWalletState,
    exchange: IExchangeState
}

const reducers = combineReducers<RootState>({
    wallet: walletReducer,
    exchange: exchangeReducer
});

const sagas: any = [];

const rootSaga = function*() {
    yield all(sagas);
};

export {reducers, rootSaga, RootState};
