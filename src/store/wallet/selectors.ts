import {RootState} from '../index';
import {IWalletState} from './reducer';

export const walletSelector = (state: RootState): IWalletState => state.wallet;
