import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyName} from '../../models/Currency';

import './Rate.scss';

const cnApp = cn('Rate');

export interface RateProps {
    sellCurrency: CurrencyName | null;
    buyCurrency: CurrencyName | null;
    value: number | null;
}

export class Rate extends React.Component<RateProps> {

    render() {
        const {sellCurrency, buyCurrency, value} = this.props;
        if (!value) {
            return null;
        }

        return (
            <div className={cnApp()}>
                <div className={cnApp('Value')}>1 {sellCurrency} = {value} {buyCurrency}</div>
            </div>
        );
    }
}
