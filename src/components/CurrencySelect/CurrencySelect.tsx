import * as React from 'react';
import { boundMethod } from 'autobind-decorator';
import { cn } from '@bem-react/classname';

import { CurrencyName } from '../../models/Currency';
import { Icon } from '../Icon/Icon';

import './CurrencySelect.scss';

const cnApp = cn('CurrencySelect');

export interface CurrencySelectProps {
    value: CurrencyName;
    items: CurrencyName[];
    onChangeValue: (value: CurrencyName) => void;
}

interface CurrencySelectState {
    isOpen: boolean;
}

class CurrencySelect extends React.Component<CurrencySelectProps, CurrencySelectState> {
    state: CurrencySelectState = {
        isOpen: false
    };

    render() {
        const { value, items } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={cnApp()}>
                <div onClick={this.toggleSelect} className={cnApp('Value')}>
                    {value}<Icon type={isOpen ? 'arrow-up' : 'arrow-down'} />
                </div>
                {isOpen && (
                    <div className={cnApp('List')}>
                        <div onClick={this.toggleSelect} className={cnApp('ListItem', { selected: true })}>{value}</div>
                        {items
                            .filter(name => name !== value)
                            .map(name => (
                            <div
                                key={name}
                                className={cnApp('ListItem')}
                                onClick={this.createOnSelectItem(name)}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    @boundMethod
    toggleSelect() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    createOnSelectItem(name: CurrencyName) {
        return () => {
            this.setState({ isOpen: false });
            this.props.onChangeValue(name);
        };
    }
}

export { CurrencySelect };
