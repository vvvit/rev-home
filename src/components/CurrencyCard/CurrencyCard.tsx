import * as React from 'react';
import {cn} from '@bem-react/classname';

import {CurrencySelect} from '../CurrencySelect/CurrencySelect';
import {PriceInput} from '../PriceInput/PriceInput';

import './CurrencyCard.scss';

const cnApp = cn('CurrencyCard');

const enum CurrencyCardType {
  buy = 'buy',
  sell = 'sell'
}

interface ICurrencyCardProps {
  currency: string;
  type?: CurrencyCardType
}

class CurrencyCard extends React.Component<ICurrencyCardProps> {
  static defaultProps: Partial<ICurrencyCardProps> = {
    type: CurrencyCardType.buy
  };

  render() {
    const { type, currency } = this.props;

    return (
      <div className={cnApp({type})}>
          <div className={cnApp('Row')}>
            <CurrencySelect value={currency} />
            <PriceInput />
          </div>
          <div className={cnApp('Row')}>
              <div className={cnApp('Info')}>
                  {`Balance: 0.00 ${currency}`}
              </div>
              <div className={cnApp('Info')}>
                  {`Inc. Fee: 135.34 ${currency}`}
              </div>
          </div>
      </div>
    );
  }
}

export { CurrencyCard, CurrencyCardType };
