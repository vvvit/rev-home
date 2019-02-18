export const enum CurrencyName {
    USD = 'usd',
    EUR = 'eur',
    GBP = 'gbp',
}

export interface ICurrency {
    name: CurrencyName,
    value: number
}
