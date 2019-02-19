import {createStandardAction} from 'typesafe-actions';
import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyName} from '../../models/Currency';

const changeValue = createStandardAction(`exchange/change-value`)<string, CurrencyExchangeType>();
const changeCurrency = createStandardAction(`exchange/change-currency`)<CurrencyName, CurrencyExchangeType>();

export {changeValue, changeCurrency};
