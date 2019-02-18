import {AxiosRequestConfig} from 'axios';

import {baseRequest} from './request';

export const getRates = () => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://openexchangerates.org/api/latest.json',
        data: {
            'app_id': '2fe61c62959e4b329c9bbf225743673c',
            'base': 'GBP'
        }
    };

    return baseRequest(config)
        .then(result => {
            const data = result && result.data;

            console.log(data);
        });
};
