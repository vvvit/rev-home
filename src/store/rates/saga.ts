import {put, call, takeEvery, select} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';

import * as ratesActions from './actions';
import {fetchRates as apiFetchRates, RatesResponse} from '../../api/rate';
import {exchangeSelector} from '../exchange/selectors'
import {IExchangeState} from '../exchange/reducer';

function hasKey<O>(obj: O, key: string | number | symbol): key is keyof O {
    return key in obj;
}

const fetchRates = function*() {
    yield put(ratesActions.fetchRatesRequest());
    const exchange: IExchangeState = yield select(exchangeSelector);
    const pair = `${exchange.sellCurrency}_${exchange.buyCurrency}`;

    try {
        const rateResponse: RatesResponse = yield call(apiFetchRates, pair);

        const d = new Date();
        const rate: ratesActions.RatesSuccess = {
            from: null,
            to: null,
            timestamp: d.getTime(),
            val: null
        };

        if (rateResponse.results && hasKey(rateResponse.results, pair)) {
            rate.from = rateResponse.results[pair].fr;
            rate.to = rateResponse.results[pair].to;
            rate.val = rateResponse.results[pair].val;
        }

        yield put(ratesActions.fetchRatesSuccess(rate));
    } catch (error) {
        console.log('error');
        console.log(error);
    }
};

export const ratesSaga = function*() {
    yield takeEvery(getType(ratesActions.fetchRates), fetchRates);
};
