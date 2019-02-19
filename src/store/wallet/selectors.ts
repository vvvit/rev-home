import { createSelector } from 'reselect';

import { RootState } from '../index';
import { WalletState } from './reducer';
import { CurrencyName } from '../../models/Currency';

export const walletSelector = (state: RootState): WalletState => state.wallet;

type WalletBalance = {[key in CurrencyName]?: number};

export const currancyBalanceSelector = createSelector<RootState, WalletState, WalletBalance>(
    walletSelector,
    wallet => {
        const balance: WalletBalance = {};

        return wallet.currencies.reduce((acc, curr) => {
            acc[curr.name] = curr.value;

            return acc;
        }, balance);
    }
);
