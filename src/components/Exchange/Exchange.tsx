import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyName} from '../../models/Currency';
import {CurrencyCard} from '../CurrencyCard/CurrencyCard';
import {Rate} from '../Rate/Rate';
import {rateConnector} from '../Rate/connectors/rateConnector';
import {exchangeConnector} from '../CurrencyCard/connectors/exchangeConnector';

const CurrencyCardContainer = exchangeConnector(CurrencyCard);
const RateContainer = rateConnector(Rate);

const cnApp = cn('Exchange');

export interface ExchangeProps {
    sellCurrency: CurrencyName;
    buyCurrency: CurrencyName;
    updateRates: () => void;
}

class Exchange extends React.Component<ExchangeProps> {
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
                <RateContainer />
                <CurrencyCardContainer type={CurrencyExchangeType.BUY} />
            </div>
        );
    }
}

export {Exchange};
