import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyCard} from '../CurrencyCard/CurrencyCard';
import {exchangeConnector} from '../CurrencyCard/connectors/exchangeConnector';
import {CurrencyName} from '../../models/Currency';

const CurrencyCardContainer = exchangeConnector(CurrencyCard);

const cnApp = cn('Exchange');

export interface ExchangeProps {
    sellCurrency: CurrencyName;
    buyCurrency: CurrencyName;
    updateRates: () => void;
}

class Exchange extends React.Component<ExchangeProps> {
    componentDidMount() {
        this.props.updateRates();
    }

    componentDidUpdate(prevProps: ExchangeProps) {
        const {sellCurrency, buyCurrency} = this.props;
        if (sellCurrency !== prevProps.sellCurrency ||
            buyCurrency !== prevProps.buyCurrency) {
            this.props.updateRates();
        }
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
