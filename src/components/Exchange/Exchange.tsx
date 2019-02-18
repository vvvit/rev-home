import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyCard} from '../CurrencyCard/CurrencyCard';
import {exchangeConnector} from '../CurrencyCard/connectors/exchangeConnector';

const CurrencyCardContainer = exchangeConnector(CurrencyCard);

const cnApp = cn('Exchange');

class Exchange extends React.Component {
    render() {
        return (
            <div className={cnApp()}>
                <CurrencyCardContainer type={CurrencyExchangeType.BUY} />
                <CurrencyCardContainer type={CurrencyExchangeType.SELL} />
            </div>
        );
    }
}

export {Exchange};
