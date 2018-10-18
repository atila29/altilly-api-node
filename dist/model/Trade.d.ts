/**
 *
 * @export
 * @interface Trade
 */
export interface Trade {
    /**
     *
     * @type {number}
     * @memberof Trade
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    side?: Trade.SideEnum;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof Trade
     */
    price?: string;
    /**
     *
     * @type {Date}
     * @memberof Trade
     */
    timestamp?: Date;
}
/**
 * @export
 * @namespace Trade
 */
export declare namespace Trade {
    /**
     * @export
     * @enum {string}
     */
    enum SideEnum {
        Sell = "sell",
        Buy = "buy"
    }
}
