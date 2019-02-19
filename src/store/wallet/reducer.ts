import { Reducer } from 'redux';

import { CurrencyName, Currency } from '../../models/Currency';

export interface WalletState {
    currencies: Currency[];
}

export const initialWalletState: WalletState = {
  currencies: [
      {
          name: CurrencyName.USD,
          value: 99.8
      },
      {
          name: CurrencyName.EUR,
          value: 50
      },
      {
          name: CurrencyName.GBP,
          value: 100
      },
      {
          name: CurrencyName.RUB,
          value: 1000
      }
  ]
};

type WalletReducer = Reducer<WalletState>;

export const walletReducer: WalletReducer = (state = initialWalletState) => {
    return state;
};
