import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {RootState} from '../../../store';
import {exchangeSelector} from '../../../store/exchange/selectors';
import {changeValue as changeValueAction} from '../../../store/exchange/actions';
import {ICurrencyCardProps} from '../CurrencyCard';
import {CurrencyExchangeType} from '../../../models/Exchange';

type OwnProps = Pick<ICurrencyCardProps, 'type'>;
type DispatchProps = Pick<ICurrencyCardProps, 'onChangeValue'>;

const mapStateToProps = (state: RootState, props: OwnProps) => {
    const exchange = exchangeSelector(state);
    let value = exchange.value;
    if (exchange.selectedAction !== props.type) {
        value = (1.13 * parseFloat(value)).toFixed(2);
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
