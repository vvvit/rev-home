import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchRates } from '../../../store/rates/actions';
import { ExchangeProps } from '../Exchange';
import { RootState } from '../../../store';
import { exchangeSelector } from '../../../store/exchange/selectors';

type DispatchProps = Pick<ExchangeProps, 'updateRates'>;

const mapStateToProps = (state: RootState) => {
    const exchange = exchangeSelector(state);

    return {
        sellCurrency: exchange.sellCurrency,
        buyCurrency: exchange.buyCurrency
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    updateRates: () => {
        dispatch(fetchRates());
    }
});

export const rateConnector = connect(mapStateToProps, mapDispatchToProps);
