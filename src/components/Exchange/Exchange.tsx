import * as React from 'react';
import {cn} from '@bem-react/classname';

import { CurrencyCard, CurrencyCardType } from '../CurrencyCard/CurrencyCard';

const cnApp = cn('Exchange');

class Exchange extends React.Component {
  render() {
    return (
      <div className={cnApp()}>
        <CurrencyCard
            currency="RUR"
            type={CurrencyCardType.buy}
        />
        <CurrencyCard
            currency="USD"
            type={CurrencyCardType.sell}
        />
      </div>
    );
  }
}

export { Exchange };
