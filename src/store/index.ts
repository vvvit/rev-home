import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import {IWalletState, walletReducer} from './wallet/reducer';
import {IExchangeState, exchangeReducer} from './exchange/reducer';
import {IRatesState, ratesReducer} from './rates/reducer';
import {ratesSaga} from './rates/saga';

interface RootState {
    wallet: IWalletState,
    exchange: IExchangeState,
    rates: IRatesState
}

const reducers = combineReducers<RootState>({
    wallet: walletReducer,
    exchange: exchangeReducer,
    rates: ratesReducer
});

const sagas = [
    ratesSaga()
];

const rootSaga = function*() {
    yield all(sagas);
};

export {reducers, rootSaga, RootState};
