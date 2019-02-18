import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {RootState} from '../../../store';
import {exchangeSelector} from '../../../store/exchange/selectors';
import {rateSelector} from '../../../store/rates/selectors';
import {changeValue as changeValueAction} from '../../../store/exchange/actions';
import {ICurrencyCardProps} from '../CurrencyCard';
import {CurrencyExchangeType} from '../../../models/Exchange';

type OwnProps = Pick<ICurrencyCardProps, 'type'>;
type DispatchProps = Pick<ICurrencyCardProps, 'onChangeValue'>;

const calculatePairValue = (rate: number, ammount: number, action: CurrencyExchangeType): string => {
    const actionRate = action === CurrencyExchangeType.SELL ? rate : 1 / rate;

    return  (actionRate * ammount).toFixed(2);
};

const mapStateToProps = (state: RootState, props: OwnProps) => {
    const exchange = exchangeSelector(state);
    const rate = rateSelector(state);

    let value = exchange.value;
    if (exchange.selectedAction !== props.type) {
        if (rate.from === exchange.sellCurrnecy &&
            rate.to === exchange.buyCurrency &&
            rate.val) {
            value = calculatePairValue(rate.val, parseFloat(value), exchange.selectedAction);
        } else {
            value = '0';
        }
    }

    return {
        value,
        currency: props.type === CurrencyExchangeType.SELL ?
            exchange.sellCurrnecy :
            exchange.buyCurrency
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    onChangeValue: (value, type) => {
        dispatch(changeValueAction(value, type));
    }
});

export const exchangeConnector = connect(mapStateToProps, mapDispatchToProps);
