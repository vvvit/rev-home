import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import { WalletState, walletReducer } from './wallet/reducer';
import { ExchangeState, exchangeReducer } from './exchange/reducer';
import { RatesState, ratesReducer } from './rates/reducer';
import { ratesSaga, pollingRatesSaga } from './rates/saga';

interface RootState {
    wallet: WalletState;
    exchange: ExchangeState;
    rates: RatesState;
}

const reducers = combineReducers<RootState>({
    wallet: walletReducer,
    exchange: exchangeReducer,
    rates: ratesReducer
});

const sagas = [
    ratesSaga(),
    pollingRatesSaga()
];

const rootSaga = function*() {
    yield all(sagas);
};

export { reducers, rootSaga, RootState };
