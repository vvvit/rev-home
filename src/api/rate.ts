import { AxiosRequestConfig } from 'axios';

import { baseRequest } from './request';
import { CurrencyName } from '../models/Currency';

const API_KEY = 'e633ec2ee30c96d9f5d2';

export interface RatesResponse {
    results?: {
        [key: string]: {
            fr: CurrencyName;
            to: CurrencyName;
            val: number;
        };
    };
}

export const fetchRates = (pair: string) => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://free.currencyconverterapi.com/api/v6/convert',
        params: {
            q: pair,
            apiKey: API_KEY
        }
    };

    return baseRequest<RatesResponse>(config)
        .then(result => {
            return result && result.data;
        });
};
