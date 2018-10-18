"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAPI_1 = require("./BaseAPI");
const api_1 = require("../api");
/**
 * TradingApi - object-oriented interface
 * @export
 * @class TradingApi
 * @extends {BaseAPI}
 */
class TradingApi extends BaseAPI_1.BaseAPI {
    /**
     * Cancel an order by clientOrderId -or- UUID
     * @summary Cancel an order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderClientOrderIdUUIDDelete(clientOrderIdUUID, options) {
        return api_1.TradingApiFp(this.configuration).orderClientOrderIdUUIDDelete(clientOrderIdUUID, options)(this.basePath);
    }
    /**
     * Get a single order by clientOrderId or UUID. clientOrderId is assigned by the user, UUID is assigned by the server
     * @summary Get a single order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderClientOrderIdUUIDGet(clientOrderIdUUID, options) {
        return api_1.TradingApiFp(this.configuration).orderClientOrderIdUUIDGet(clientOrderIdUUID, options)(this.basePath);
    }
    /**
     * Cancel a group of orders.  Enter market symbol to cancel all open orders in a single market.  Leave symbol empty to cancel all orders in all markets.
     * @summary Cancel all open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderDelete(symbol, options) {
        return api_1.TradingApiFp(this.configuration).orderDelete(symbol, options)(this.basePath);
    }
    /**
     * List of your currently open orders.
     * @summary List your current open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    orderGet(symbol, options) {
        return api_1.TradingApiFp(this.configuration).orderGet(symbol, options)(this.basePath);
    }
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
    orderPost(symbol, side, quantity, clientOrderId, type, timeInForce, price, stopPrice, tpPrice, expireTime, strictValidate, options) {
        return api_1.TradingApiFp(this.configuration).orderPost(symbol, side, quantity, clientOrderId, type, timeInForce, price, stopPrice, tpPrice, expireTime, strictValidate, options)(this.basePath);
    }
    /**
     * This returns available trading balance for each currency
     * @summary Get basic trading balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    tradingBalanceGet(options) {
        return api_1.TradingApiFp(this.configuration).tradingBalanceGet(options)(this.basePath);
    }
    /**
     *
     * @summary Get trading fee rate
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingApi
     */
    tradingFeeSymbolGet(symbol, options) {
        return api_1.TradingApiFp(this.configuration).tradingFeeSymbolGet(symbol, options)(this.basePath);
    }
}
exports.TradingApi = TradingApi;
//# sourceMappingURL=TradingApi.js.map