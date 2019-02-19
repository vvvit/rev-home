import * as React from 'react';
import { shallow } from 'enzyme';

import { PriceInput, MAX_VALUE_LENGHT } from './PriceInput';
import { CurrencyExchangeType } from '../../models/Exchange';

describe('PriceInput', () => {
    let onChange: jest.Mock;
    const event = { persist: jest.fn(), currentTarget: { value: '1' }};

    beforeEach(() => {
        onChange = jest.fn();
        event.currentTarget.value = '0';
    });

    it('renders correctly with BUY type', () => {
        expect(shallow(
            <PriceInput
                value="100.01"
                type={CurrencyExchangeType.BUY}
                onChange={onChange}
            />
        )).toMatchSnapshot();
    });

    it('renders correctly with SELL type', () => {
        expect(shallow(
            <PriceInput
                value="990.01"
                type={CurrencyExchangeType.SELL}
                onChange={onChange}
            />
        )).toMatchSnapshot();
    });

    it('call `onChange` when the value is changed', () => {
        const component = shallow(
            <PriceInput
                value="990.01"
                type={CurrencyExchangeType.SELL}
                onChange={onChange}
            />
        );

        event.currentTarget.value = '1';
        component.find('.PriceInput-Input')
            .simulate('change', event);
        expect(onChange.mock.calls[0][0]).toBe('1');

        event.currentTarget.value = '- 100.01';
        component.find('.PriceInput-Input')
            .simulate('change', event);
        expect(onChange.mock.calls[1][0]).toBe('100.01');
    });

    describe('.formatValue', () => {
        const wrapper = shallow<PriceInput>(
            <PriceInput/>
        );
        const priceInputInstace = wrapper.instance();

        it('returns integer string if receives integer string', () => {
            expect(priceInputInstace.formatValue('111')).toEqual('111');
            expect(priceInputInstace.formatValue('1234')).toEqual('1234');
        });

        it('returns float string if receives float string', () => {
            expect(priceInputInstace.formatValue('111.1')).toEqual('111.1');
            expect(priceInputInstace.formatValue('1234.3')).toEqual('1234.3');
        });

        it('valid number can\'t be more than max length', () => {
            const value = new Array(MAX_VALUE_LENGHT + 1).join('1');

            expect(priceInputInstace.formatValue(`${value}2`)).toEqual(value);
        });

        it('string with not only digits formats to float', () => {
            expect(priceInputInstace.formatValue('33error')).toEqual('33');
            expect(priceInputInstace.formatValue('33.3error')).toEqual('33.3');
            expect(priceInputInstace.formatValue('33.3.3')).toEqual('33.3');
            expect(priceInputInstace.formatValue('3+')).toEqual('3');
        });

        it('returns \'0\' for string which can\'t be formed', () => {
            expect(priceInputInstace.formatValue('wrong')).toEqual('0');
            expect(priceInputInstace.formatValue('--33.3')).toEqual('0');
        });

        it('saves dot in the end for digits string', () => {
            expect(priceInputInstace.formatValue('12.')).toEqual('12.');
        });

        it('saves first zero after dot in the valid float string', () => {
            expect(priceInputInstace.formatValue('12.0')).toEqual('12.0');
        });

        it('erase dot if length with dot equal max length of the string', () => {
            const value = new Array(MAX_VALUE_LENGHT).join('1');

            expect(priceInputInstace.formatValue(`${value}.`)).toEqual(`${value}`);
        });

        it('erase last zero after dot if length equal max length of the string', () => {
            const value = new Array(MAX_VALUE_LENGHT - 1).join('1');

            expect(priceInputInstace.formatValue(`${value}.0`)).toEqual(`${value}.`);
        });
    });
});
