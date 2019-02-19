import * as React from 'react';
import { shallow } from 'enzyme';

import { Exchange } from './Exchange';
import { CurrencyName } from '../../models/Currency';

describe('Exchange', () => {
    let updateRates: jest.Mock;

    beforeEach(() => {
        updateRates = jest.fn();
    });

    it('renders correctly', () => {
        expect(shallow(
            <Exchange
                buyCurrency={CurrencyName.EUR}
                sellCurrency={CurrencyName.USD}
                updateRates={updateRates}
            />
        )).toMatchSnapshot();
    });

    it('updates rate when buy currency changed', () => {
        const component = shallow(
            <Exchange
                buyCurrency={CurrencyName.EUR}
                sellCurrency={CurrencyName.USD}
                updateRates={updateRates}
            />
        );

        component.setProps({ buyCurrency: CurrencyName.USD });

        expect(updateRates).toBeCalled();
    });

    it('updates rate when sell currency changed', () => {
        const component = shallow(
            <Exchange
                buyCurrency={CurrencyName.EUR}
                sellCurrency={CurrencyName.USD}
                updateRates={updateRates}
            />
        );

        component.setProps({ sellCurrency: CurrencyName.EUR });

        expect(updateRates).toBeCalled();
    });
});
