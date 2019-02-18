import {createStandardAction} from 'typesafe-actions';
import {CurrencyExchangeType} from "../../models/Exchange";

const prefix = 'exchange';

const changeValue = createStandardAction(`${prefix}/change-value`)<string, CurrencyExchangeType>();

export {changeValue};
