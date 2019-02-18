import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyCard} from '../CurrencyCard/CurrencyCard';
import {exchangeConnector} from '../CurrencyCard/connectors/exchangeConnector';

const CurrencyCardContainer = exchangeConnector(CurrencyCard);

const cnApp = cn('Exchange');

export interface ExchangeProps {
    updateRates: () => void;
}

class Exchange extends React.Component<ExchangeProps> {
    componentDidMount() {
        this.props.updateRates();
    }

    render() {
        return (
            <div className={cnApp()}>
                <CurrencyCardContainer type={CurrencyExchangeType.SELL} />
                <CurrencyCardContainer type={CurrencyExchangeType.BUY} />
            </div>
        );
    }
}

export {Exchange};
