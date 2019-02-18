import * as React from 'react';
import {boundMethod} from 'autobind-decorator';
import {cn} from '@bem-react/classname';

import {CurrencyName} from '../../models/Currency';
import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencySelect} from '../CurrencySelect/CurrencySelect';
import {exchangeConnector} from '../CurrencySelect/connectors/exchangeConnector';
import {PriceInput} from '../PriceInput/PriceInput';

import './CurrencyCard.scss';

const cnApp = cn('CurrencyCard');

const CurrencySelectContainer = exchangeConnector(CurrencySelect);

export interface ICurrencyCardProps {
    currency: CurrencyName;
    value: string;
    balance: number;
    type: CurrencyExchangeType;
    onChangeValue: (value: string, type: CurrencyExchangeType) => void;
}

export class CurrencyCard extends React.Component<ICurrencyCardProps> {
    render() {
        const {type, currency, value, balance} = this.props;

        const isNegativeBalance = type === CurrencyExchangeType.SELL && (balance < parseFloat(value));

        return (
            <div className={cnApp({type})}>
                <div className={cnApp('Row')}>
                    <CurrencySelectContainer type={type} value={currency}/>
                    <PriceInput value={value} type={type} onChange={this.onChangePrice}/>
                </div>
                <div className={cnApp('Row', {justify: 'between'}, [cnApp('CardInfo')])}>
                    <div className={cnApp('Info', {negative: isNegativeBalance})}>
                        {`Balance: ${balance} ${currency}`}
                    </div>
                </div>
            </div>
        );
    }

    @boundMethod
    onChangePrice(value: string) {
        const {onChangeValue, type} = this.props;

        onChangeValue(value, type);
    }
}
