import {createStandardAction} from 'typesafe-actions';
import {CurrencyExchangeType} from '../../models/Exchange';
import {CurrencyName} from '../../models/Currency';

const prefix = 'exchange';

const changeValue = createStandardAction(`${prefix}/change-value`)<string, CurrencyExchangeType>();
const changeCurrency = createStandardAction(`${prefix}/change-currency`)<CurrencyName, CurrencyExchangeType>();

export {changeValue, changeCurrency};
