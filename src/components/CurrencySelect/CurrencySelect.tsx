import * as React from 'react';
import {cn} from '@bem-react/classname';

import './CurrencySelect.scss';

const cnApp = cn('CurrencySelect');

interface ICurrencySelectProps {
    value: string;
}

class CurrencySelect extends React.Component<ICurrencySelectProps> {
    render() {
        const { value } = this.props;

        return (
            <div className={cnApp()}>
                <div className={cnApp('Value')}>{value}</div>
            </div>
        );
    }
}

export { CurrencySelect };
