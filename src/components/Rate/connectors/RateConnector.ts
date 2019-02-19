import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { rateSelector } from '../../../store/rates/selectors';

const mapStateToProps = (state: RootState) => {
    const rate = rateSelector(state);

    return {
        error: rate.error,
        value: rate.val,
        sellCurrency: rate.from,
        buyCurrency: rate.to
    };
};

export const rateConnector = connect(mapStateToProps);
