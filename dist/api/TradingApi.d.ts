import { BaseAPI } from "./BaseAPI";
/**
 * TradingApi - object-oriented interface
 * @export
 * @class TradingApi
 * @extends {BaseAPI}
 */
export declare class TradingApi extends BaseAPI {
    /**
     * Cancel an order by clientOrderId -or- UUID
     * @summary Cancel an order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderClientOrderIdUUIDDelete(clientOrderIdUUID: string, options?: any): import("axios").AxiosPromise<import("../model/Order").Order>;
    /**
     * Get a single order by clientOrderId or UUID. clientOrderId is assigned by the user, UUID is assigned by the server
     * @summary Get a single order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): import("axios").AxiosPromise<import("../model/Order").Order>;
    /**
     * Cancel a group of orders.  Enter market symbol to cancel all open orders in a single market.  Leave symbol empty to cancel all orders in all markets.
     * @summary Cancel all open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderDelete(symbol?: string, options?: any): import("axios").AxiosPromise<import("../model/Order").Order[]>;
    /**
     * List of your currently open orders.
     * @summary List your current open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderGet(symbol?: string, options?: any): import("axios").AxiosPromise<import("../model/Order").Order[]>;
    /**
     *
     * @summary Create new order
     * @param {string} symbol
     * @param {string} side
     * @param {string} quantity
     * @param {string} [clientOrderId]
     * @param {string} [type] Order type.  See https://www.altilly.com/page/orderoptions
     * @param {string} [timeInForce] Time in force
     * @param {string} [price]
     * @param {string} [stopPrice] Used for stopMarket and stopLimit order types.  See https://www.altilly.com/page/orderoptions
     * @param {string} [tpPrice] Used for tpMarket and tpLimit order types.  See https://www.altilly.com/page/orderoptions
     * @param {any} [expireTime]
     * @param {boolean} [strictValidate] Strict validate amount and price precision without truncation.  Setting true will return an error if your quantity/price doesn&#39;t match increment/tick size.  Default false will truncate values to allowed number of decimal places.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderPost(symbol: string, side: string, quantity: string, clientOrderId?: string, type?: string, timeInForce?: string, price?: string, stopPrice?: string, tpPrice?: string, expireTime?: any, strictValidate?: boolean, options?: any): import("axios").AxiosPromise<import("../model/Order").Order>;
    /**
     * This returns available trading balance for each currency
     * @summary Get basic trading balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    tradingBalanceGet(options?: any): import("axios").AxiosPromise<import("../model/BasicBalance").BasicBalance[]>;
    /**
     *
     * @summary Get trading fee rate
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    tradingFeeSymbolGet(symbol: string, options?: any): import("axios").AxiosPromise<import("../model/TradingFee").TradingFee>;
}
