/**
 *
 * @export
 * @interface Ticker
 */
export interface Ticker {
    /**
     *
     * @type {string}
     * @memberof Ticker
     */
    symbol?: string;
    /**
     * Best ASK.
     * @type {string}
     * @memberof Ticker
     */
    ask?: string;
    /**
     * Best BID.
     * @type {string}
     * @memberof Ticker
     */
    bid?: string;
    /**
     * Last trade price
     * @type {string}
     * @memberof Ticker
     */
    last?: string;
    /**
     * Min trade price of the last 24 hours.
     * @type {string}
     * @memberof Ticker
     */
    low?: string;
    /**
     * Max trade price of the last 24 hours.
     * @type {string}
     * @memberof Ticker
     */
    high?: string;
    /**
     * Trade price 24 hours ago.
     * @type {string}
     * @memberof Ticker
     */
    open?: string;
    /**
     * Trading volume in commoduty currency of the last 24 hours.
     * @type {string}
     * @memberof Ticker
     */
    volume?: string;
    /**
     * Trading volume in currency of the last 24 hours.
     * @type {string}
     * @memberof Ticker
     */
    volumeQuote?: string;
    /**
     * Actual timestamp.
     * @type {Date}
     * @memberof Ticker
     */
    timestamp?: Date;
}
