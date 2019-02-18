import {Reducer} from 'redux';

import {CurrencyName, ICurrency} from '../../models/Currency'

export interface IWalletState {
    currencies: Array<ICurrency>;
}

export const initialWalletState: IWalletState = {
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

type WalletReducer = Reducer<IWalletState>;

export const walletReducer: WalletReducer = (state = initialWalletState) => {
    return state;
};
