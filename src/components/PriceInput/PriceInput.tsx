import * as React from 'react';
import {boundMethod} from 'autobind-decorator';
import {cn} from "@bem-react/classname";

import './PriceInput.scss';

interface IPriceInputProps {
    value: string;
    onChange: (value: string) => void;
}

const cnPriceInput = cn('PriceInput');

export const MAX_VALUE_LENGHT = 15;

export class PriceInput extends React.Component<IPriceInputProps> {
    static defaultProps: Partial<IPriceInputProps> = {
        value: '0'
    };

    @boundMethod
    onChange(e: React.FormEvent<HTMLInputElement>) {
       e.persist();

        const value = this.formatValue(e.currentTarget.value);

        this.props.onChange(value);
    }

    render() {
        const {value} = this.props;

        return (
            <div className={cnPriceInput()}>
                <input className={cnPriceInput('Input')} value={value} onChange={this.onChange} />
            </div>
        );
    }

    formatValue(value: string): string {
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
