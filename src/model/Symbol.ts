/**
 *
 * @export
 * @interface Symbol
 */
export interface Symbol {
    /**
     * The trading symbol
     * @type {string}
     * @memberof Symbol
     */
    id?: string;
    /**
     * The main trading currency for this symbol
     * @type {string}
     * @memberof Symbol
     */
    baseCurrency?: string;
    /**
     * The secondary trading currency for this symbol
     * @type {string}
     * @memberof Symbol
     */
    quoteCurrency?: string;
    /**
     * All quantities must be divisible by this number, and cannot be less than this number
     * @type {string}
     * @memberof Symbol
     */
    quantityIncrement?: string;
    /**
     * All prices must be divisible by this number, and cannot be less than this number
     * @type {string}
     * @memberof Symbol
     */
    tickSize?: string;
    /**
     * The buy/sell trading fee for taker orders.  Taker orders remove an item from the order books.
     * @type {string}
     * @memberof Symbol
     */
    takeLiquidityRate?: string;
    /**
     * The buy/sell trading fee for maker orders.   Maker orders add an item to the order books.
     * @type {string}
     * @memberof Symbol
     */
    provideLiquidityRate?: string;
    /**
     * The currency in which fees are taken.
     * @type {string}
     * @memberof Symbol
     */
    feeCurrency?: string;
}