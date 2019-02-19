export const enum CurrencyName {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    RUB = 'RUB'
}

export interface Currency {
    name: CurrencyName;
    value: number;
}
