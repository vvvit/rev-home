import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyName} from '../../models/Currency';

import './Rate.scss';

const cnApp = cn('Rate');

export interface RateProps {
    sellCurrency: CurrencyName | null;
    buyCurrency: CurrencyName | null;
    value: number | null;
    error: string | null;
}

export class Rate extends React.Component<RateProps> {

    render() {
        const {sellCurrency, buyCurrency, value, error} = this.props;
        if (!value && !error) {
            return null;
        }

        return (
            <div className={cnApp()}>
                <div className={cnApp('Value', {error: Boolean(error)})}>
                    {!error ? `1 ${sellCurrency} = ${value} ${buyCurrency}` : error}
                </div>
            </div>
        );
    }
}
