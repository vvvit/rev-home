import * as React from 'react';
import {boundMethod} from 'autobind-decorator';
import {cn} from "@bem-react/classname";

import './PriceInput.scss';

interface IPriceInputProps {
    value: string;
    onChange: (value: number) => void;
}

interface IPriceInputState {
    value: string;
}

const cnPriceInput = cn('PriceInput');

export const MAX_VALUE_LENGHT = 15;

export class PriceInput extends React.Component<IPriceInputProps, IPriceInputState> {
    static defaultProps: Partial<IPriceInputProps> = {
        onChange: () => {},
        value: '0'
    };

    state: IPriceInputState = {
        value: this.props.value
    };

    @boundMethod
    onChange(e: React.FormEvent<HTMLInputElement>) {
       e.persist();

        const value = this.formatValue(e.currentTarget.value);

        this.setState({ value });
    }

    render() {
        return (
            <div className={cnPriceInput()}>
                <input className={cnPriceInput('Input')} value={this.state.value} onChange={this.onChange} />
            </div>
        );
    }

    formatValue(value: string) {
        // valid float string without insignificant trailing zeros
        const validNumber = parseFloat(parseFloat(value).toFixed(2));
        let validString = isNaN(validNumber) ? '0' : String(validNumber);

        if (value.length > MAX_VALUE_LENGHT) {
            validString = value.substring(-value.length + MAX_VALUE_LENGHT, MAX_VALUE_LENGHT);
        } else if (validString.length < (MAX_VALUE_LENGHT - 2) && value.indexOf('.0') === validString.length) {
            // for strings like '11.0'
            validString += '.0';
        } else if (validString.length < (MAX_VALUE_LENGHT - 1) && value.indexOf('.') === validString.length) {
            // for strings like '11.'
            validString += '.';
        }

        return validString;
    }
}
