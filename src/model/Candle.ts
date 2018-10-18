/**
 *
 * @export
 * @interface Candle
 */
export interface Candle {
    /**
     *
     * @type {Date}
     * @memberof Candle
     */
    timestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    open?: string;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    close?: string;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    min?: string;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    max?: string;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof Candle
     */
    volumeQuote?: string;
}