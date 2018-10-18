/**
 *
 * @export
 * @interface PublicTrade
 */
export interface PublicTrade {
    /**
     *
     * @type {number}
     * @memberof PublicTrade
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof PublicTrade
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof PublicTrade
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof PublicTrade
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof PublicTrade
     */
    side?: PublicTrade.SideEnum;
    /**
     *
     * @type {Date}
     * @memberof PublicTrade
     */
    timestamp?: Date;
}
/**
 * @export
 * @namespace PublicTrade
 */
export declare namespace PublicTrade {
    /**
     * @export
     * @enum {string}
     */
    enum SideEnum {
        Sell = "sell",
        Buy = "buy"
    }
}
