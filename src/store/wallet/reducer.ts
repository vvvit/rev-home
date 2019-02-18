import {Reducer} from 'redux';

import {CurrencyName, ICurrency} from '../../models/Currency'

export interface IWalletState {
    currencies: Array<ICurrency>;
}

export const initialWalletState: IWalletState = {
  currencies: [
      {
          name: CurrencyName.USD,
          value: 100
      },
      {
          name: CurrencyName.EUR,
          value: 100
      },
      {
          name: CurrencyName.GBP,
          value: 100
      },
      {
          name: CurrencyName.RUB,
          value: 100
      }
  ]
};

type WalletReducer = Reducer<IWalletState>;

export const walletReducer: WalletReducer = (state = initialWalletState) => {
    return state;
};
