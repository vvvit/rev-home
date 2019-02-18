import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {fetchRates} from '../../../store/rates/actions';
import {ExchangeProps} from '../Exchange';

type DispatchProps = Pick<ExchangeProps, 'updateRates'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    updateRates: () => {
        dispatch(fetchRates());
    }
});

export const rateConnector = connect(null, mapDispatchToProps);
