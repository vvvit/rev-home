import {createStandardAction} from 'typesafe-actions';
import {CurrencyName} from '../../models/Currency';

export interface RatesSuccess {
    from: CurrencyName | null;
    to: CurrencyName | null;
    timestamp: number;
    val: number | null;
}

const prefix = 'rates';

const fetchRates = createStandardAction(`${prefix}/fetch`)();
const fetchRatesRequest = createStandardAction(`${prefix}/fetch-request`)();
const fetchRatesSuccess = createStandardAction(`${prefix}/fetch-success`)<RatesSuccess>();
const fetchRatesError = createStandardAction(`${prefix}/fetch-error`)();

export {fetchRates, fetchRatesRequest, fetchRatesSuccess, fetchRatesError};
