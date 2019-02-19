import { put, call, takeEvery, select, delay } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import * as ratesActions from './actions';
import { fetchRates as apiFetchRates, RatesResponse } from '../../api/rate';
import { exchangeSelector } from '../exchange/selectors';
import { ExchangeState } from '../exchange/reducer';

const POLLING_DELAY_MS = 10000;

function hasKey<O>(obj: O, key: string | number | symbol): key is keyof O {
    return key in obj;
}

const fetchRates = function*() {
    yield put(ratesActions.fetchRatesRequest());
    const exchange: ExchangeState = yield select(exchangeSelector);
    const pair = `${exchange.sellCurrency}_${exchange.buyCurrency}`;

    try {
        const d = new Date();
        const timestamp = d.getTime();
        const rateResponse: RatesResponse = yield call(apiFetchRates, pair);

        const rate: ratesActions.RatesSuccess = {
            timestamp,
            from: null,
            to: null,
            val: null
        };

        if (rateResponse.results && hasKey(rateResponse.results, pair)) {
            rate.from = rateResponse.results[pair].fr;
            rate.to = rateResponse.results[pair].to;
            rate.val = rateResponse.results[pair].val;
        }

        yield put(ratesActions.fetchRatesSuccess(rate));
    } catch (error) {
        if (error.response && error.response.data) {
            yield put(ratesActions.fetchRatesError(error.response.data.error));
        }
    }
};

export const pollingRatesSaga = function*() {
    while (true) {
        try {
            yield fetchRates();
            yield delay(POLLING_DELAY_MS);
        } catch (error) {
            // log error here
        }
    }
};

export const ratesSaga = function*() {
    yield takeEvery(getType(ratesActions.fetchRates), fetchRates);
};
