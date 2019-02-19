import * as React from 'react';
import { shallow } from 'enzyme';

import { CurrencyCard } from './CurrencyCard';
import { PriceInput } from '../PriceInput/PriceInput';
import { CurrencyExchangeType } from '../../models/Exchange';
import { CurrencyName } from '../../models/Currency';

describe('CurrencyCard', () => {
    let onChange: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
    });

    it('renders correctly with BUY type', () => {
        expect(shallow(
            <CurrencyCard
                type={CurrencyExchangeType.BUY}
                balance={99}
                value="100.01"
                currency={CurrencyName.EUR}
                onChangeValue={onChange}
            />
        )).toMatchSnapshot();
    });

    it('renders correctly with SELL type', () => {
        expect(shallow(
            <CurrencyCard
                type={CurrencyExchangeType.SELL}
                balance={99}
                value="100.01"
                currency={CurrencyName.USD}
                onChangeValue={onChange}
            />
        )).toMatchSnapshot();
    });

    it('invokes onchange property when value changed inside input', () => {
        const component = shallow(
            <CurrencyCard
                type={CurrencyExchangeType.SELL}
                balance={99}
                value="100.01"
                currency={CurrencyName.USD}
                onChangeValue={onChange}
            />
        );

        const PriceInputComponent = component.find(PriceInput);
        // изменение цены дожно активировать услугу
        PriceInputComponent.prop('onChange')('1000');

        expect(onChange).toBeCalledWith('1000', CurrencyExchangeType.SELL);
    });
});
