import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../../store';
import { CurrencySelectProps } from '../CurrencySelect';
import { walletSelector } from '../../../store/wallet/selectors';
import { changeCurrency } from '../../../store/exchange/actions';
import { CurrencyExchangeType } from '../../../models/Exchange';

interface OwnProps {
    type: CurrencyExchangeType;
}
type DispatchProps = Pick<CurrencySelectProps, 'onChangeValue'>;

const mapStateToProps = (state: RootState) => {
    const wallet = walletSelector(state);

    return {
        items: wallet.currencies.map(item => item.name)
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): DispatchProps => ({
    onChangeValue: value => {
        dispatch(changeCurrency(value, props.type));
    }
});

export const exchangeConnector = connect(mapStateToProps, mapDispatchToProps);
