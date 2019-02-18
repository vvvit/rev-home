import {Reducer} from 'redux';

import {CurrencyName, ICurrency} from '../../models/Currency'

export interface IWalletState {
    currencies: Partial<Record<CurrencyName, ICurrency>>
}

export const initialWalletState: IWalletState = {
  currencies: {
      [CurrencyName.USD]: {
          name: CurrencyName.USD,
          value: 100
      },
      [CurrencyName.EUR]: {
          name: CurrencyName.EUR,
          value: 100
      },
      [CurrencyName.GBP]: {
          name: CurrencyName.GBP,
          value: 100
      },
  }
};

type WalletReducer = Reducer<IWalletState>;

export const walletReducer: WalletReducer = (state = initialWalletState) => {
    return state;
};
