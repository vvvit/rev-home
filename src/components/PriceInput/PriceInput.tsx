import * as React from 'react';
import {boundMethod} from 'autobind-decorator';
import {cn} from "@bem-react/classname";

import {CurrencyExchangeType} from '../../models/Exchange';

import './PriceInput.scss';

interface IPriceInputProps {
    value: string;
    type: CurrencyExchangeType;
    onChange: (value: string) => void;
}

const cnPriceInput = cn('PriceInput');

export const MAX_VALUE_LENGHT = 15;

export class PriceInput extends React.Component<IPriceInputProps> {
    static defaultProps: Partial<IPriceInputProps> = {
        value: '0'
    };

    inputRef = React.createRef<HTMLInputElement>();

    @boundMethod
    onChange(e: React.FormEvent<HTMLInputElement>) {
        e.persist();

        const value = this.removeDirectionSign(e.currentTarget.value);

        this.props.onChange(this.formatValue(value));
    }

    @boundMethod
    onFocus(e: React.FormEvent<HTMLInputElement>) {
        e.persist();

        if (this.inputRef.current) {
            this.inputRef.current.selectionStart = e.currentTarget.value.length;
        }
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

    addDirectionSign(value: string, type: CurrencyExchangeType): string {
        let sign = '';

        if (parseFloat(value) > 0) {
            sign = type === CurrencyExchangeType.SELL ? '- ' : '+ ';
        }

        return sign + value;
    }

    removeDirectionSign(value: string): string {
        return value.replace(/^[-+]\s?/, '');
    }

    componentDidMount() {
        if (this.props.type === CurrencyExchangeType.SELL && this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    render() {
        const {value, type} = this.props;

        return (
            <div className={cnPriceInput()}>
                <input
                    className={cnPriceInput('Input')}
                    value={this.addDirectionSign(value, type)}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    ref={this.inputRef}
                />
            </div>
        );
    }
}
