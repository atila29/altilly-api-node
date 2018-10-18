import { OrderbookAsk } from "./OrderbookAsk";

/**
 *
 * @export
 * @interface Orderbook
 */
export interface Orderbook {
    /**
     *
     * @type {Array<OrderbookAsk>}
     * @memberof Orderbook
     */
    ask?: Array<OrderbookAsk>;
    /**
     *
     * @type {Array<OrderbookAsk>}
     * @memberof Orderbook
     */
    bid?: Array<OrderbookAsk>;
    /**
     *
     * @type {Date}
     * @memberof Orderbook
     */
    timestamp?: Date;
}