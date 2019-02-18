import * as React from 'react';
import {boundMethod} from 'autobind-decorator';
import {cn} from '@bem-react/classname';

import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencySelect} from '../CurrencySelect/CurrencySelect';
import {PriceInput} from '../PriceInput/PriceInput';

import './CurrencyCard.scss';

const cnApp = cn('CurrencyCard');

export interface ICurrencyCardProps {
  currency: string;
  value: string;
  type: CurrencyExchangeType;
  onChangeValue: (value: string, type: CurrencyExchangeType) => void;
}

export class CurrencyCard extends React.Component<ICurrencyCardProps> {
  render() {
    const { type, currency, value } = this.props;

    return (
      <div className={cnApp({type})}>
          <div className={cnApp('Row')}>
            <CurrencySelect value={currency} />
            <PriceInput value={value} onChange={this.onChangePrice} />
          </div>
          <div className={cnApp('Row', {justify: 'between'})}>
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

  @boundMethod
  onChangePrice(value: string) {
      const {onChangeValue, type} = this.props;

      onChangeValue(value, type);
  }
}
