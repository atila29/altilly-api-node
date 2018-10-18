import { OrderTradesReport } from "./OrderTradesReport";
/**
 *
 * @export
 * @interface Order
 */
export interface Order {
    /**
     *
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    side?: Order.SideEnum;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    status?: Order.StatusEnum;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    type?: Order.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    timeInForce?: Order.TimeInForceEnum;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    stopPrice?: string;
    /**
     *
     * @type {Date}
     * @memberof Order
     */
    expireTime?: Date;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof Order
     */
    cumQuantity?: string;
    /**
     *
     * @type {Date}
     * @memberof Order
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Order
     */
    updatedAt?: Date;
    /**
     *
     * @type {Array<OrderTradesReport>}
     * @memberof Order
     */
    tradesReport?: Array<OrderTradesReport>;
}
/**
 * @export
 * @namespace Order
 */
export declare namespace Order {
    /**
     * @export
     * @enum {string}
     */
    enum SideEnum {
        Sell = "sell",
        Buy = "buy"
    }
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        New = "new",
        Suspended = "suspended",
        PartiallyFilled = "partiallyFilled",
        Filled = "filled",
        Canceled = "canceled",
        Expired = "expired",
        Pending = "pending"
    }
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        Limit = "limit",
        Market = "market",
        StopLimit = "stopLimit",
        StopMarket = "stopMarket"
    }
    /**
     * @export
     * @enum {string}
     */
    enum TimeInForceEnum {
        GTC = "GTC",
        IOC = "IOC",
        FOK = "FOK",
        Day = "Day",
        GTD = "GTD"
    }
}
/**
 *
 * @export
 * @interface OrderTradesReport
 */
