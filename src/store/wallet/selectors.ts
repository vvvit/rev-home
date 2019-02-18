import {createSelector} from 'reselect';

import {RootState} from '../index';
import {IWalletState} from './reducer';
import {CurrencyName} from '../../models/Currency';

export const walletSelector = (state: RootState): IWalletState => state.wallet;

type WalletBalance = {[key in CurrencyName]?: number}

export const currancyBalanceSelector = createSelector<RootState, IWalletState, WalletBalance>(
    walletSelector,
    (wallet) => {
        const balance: WalletBalance = {};

        return wallet.currencies.reduce((acc, curr) => {
            acc[curr.name] = curr.value;

            return acc;
        }, balance);
    }
);
