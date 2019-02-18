export const enum CurrencyName {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    RUB = 'RUB',
}

export interface ICurrency {
    name: CurrencyName,
    value: number
}
