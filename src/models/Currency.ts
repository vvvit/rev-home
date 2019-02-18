export const enum CurrencyName {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
}

export interface ICurrency {
    name: CurrencyName,
    value: number
}
