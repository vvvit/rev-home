import { createStandardAction } from 'typesafe-actions';
import { CurrencyName } from '../../models/Currency';

export interface RatesSuccess {
    from: CurrencyName | null;
    to: CurrencyName | null;
    timestamp: number;
    val: number | null;
}

const fetchRates = createStandardAction(`rates/fetch`)();
const fetchRatesRequest = createStandardAction(`rates/fetch-request`)();
const fetchRatesSuccess = createStandardAction(`rates/fetch-success`)<RatesSuccess>();
const fetchRatesError = createStandardAction(`rates/fetch-error`)<string>();

export { fetchRates, fetchRatesRequest, fetchRatesSuccess, fetchRatesError };
