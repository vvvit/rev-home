import * as React from 'react';
import { shallow } from 'enzyme';

import { CurrencySelect } from './CurrencySelect';
import { CurrencyName } from '../../models/Currency';

describe('CurrencySelect', () => {
    let onChange: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
    });

    it('renders correctly with EUR value', () => {
        expect(shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        )).toMatchSnapshot();
    });

    it('correct renders with open state', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );

        component.setState({ isOpen: true });

        expect(component).toMatchSnapshot();
    });

    it('correct toggles open state', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );

        component.find('.CurrencySelect-Value').simulate('click');

        expect(component.state('isOpen')).toEqual(true);
    });

    it('correct toggles open state', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );

        component.find('.CurrencySelect-Value').simulate('click');

        expect(component.state('isOpen')).toEqual(true);
    });

    it('correct toggles open state', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );

        component.find('.CurrencySelect-Value').simulate('click');

        expect(component.state('isOpen')).toEqual(true);
    });

    it('correct toggles open state', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );

        component.find('.CurrencySelect-Value').simulate('click');

        expect(component.state('isOpen')).toEqual(true);
    });

    it('invokes onchange when item was selected', () => {
        const component = shallow(
            <CurrencySelect
                value={CurrencyName.EUR}
                items={[CurrencyName.EUR, CurrencyName.USD, CurrencyName.RUB]}
                onChangeValue={onChange}
            />
        );
        component.setState({ isOpen: true });
        component.find('.CurrencySelect-ListItem').at(1).simulate('click');

        expect(onChange).toBeCalled();
    });
});
