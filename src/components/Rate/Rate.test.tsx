import * as React from 'react';
import { shallow } from 'enzyme';

import { Rate } from './Rate';
import { CurrencyName } from '../../models/Currency';

describe('Rate', () => {
    it('renders correctly with value and without an error', () => {
        expect(shallow(
            <Rate
                sellCurrency={CurrencyName.EUR}
                buyCurrency={CurrencyName.USD}
                value={0.98}
                error={null}
            />
        )).toMatchSnapshot();
    });

    it('renders correctly with error', () => {
        expect(shallow(
            <Rate
                sellCurrency={CurrencyName.EUR}
                buyCurrency={CurrencyName.USD}
                value={0.98}
                error="api error"
            />
        )).toMatchSnapshot();
    });

    it('returns null without value and error', () => {
        const component = shallow(
            <Rate
                sellCurrency={CurrencyName.EUR}
                buyCurrency={CurrencyName.USD}
                value={null}
                error={null}
            />
        );

        expect(component.type()).toEqual(null);
    });
});
