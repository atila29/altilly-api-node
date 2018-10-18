"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAPI_1 = require("./BaseAPI");
const api_1 = require("../api");
/**
 * TradingHistoryApi - object-oriented interface
 * @export
 * @class TradingHistoryApi
 * @extends {BaseAPI}
 */
class TradingHistoryApi extends BaseAPI_1.BaseAPI {
    /**
     *
     * @summary Get your historical orders - filled or cancelled
     * @param {'filled' | 'cancelled'} historytype History Type
     * @param {string} [symbol]
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp' | 'id'} [by] Filter field
     * @param {string} [from] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise order id
     * @param {string} [till] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise order id
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {string} [clientOrderId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingHistoryApi
     */
    historyOrderGet(historytype, symbol, sort, by, from, till, limit, offset, clientOrderId, options) {
        return api_1.TradingHistoryApiFp(this.configuration).historyOrderGet(historytype, symbol, sort, by, from, till, limit, offset, clientOrderId, options)(this.basePath);
    }
    /**
     *
     * @summary Get your historical trades by specified clientOrderId -or- order UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingHistoryApi
     */
    historyTradesClientOrderIdUUIDGet(clientOrderIdUUID, options) {
        return api_1.TradingHistoryApiFp(this.configuration).historyTradesClientOrderIdUUIDGet(clientOrderIdUUID, options)(this.basePath);
    }
    /**
     *
     * @summary Get your historical trades
     * @param {string} [symbol]
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp' | 'id'} [by] Filter field
     * @param {string} [from] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise trade id
     * @param {string} [till] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise trade id
     * @param {number} [limit] Default 100.  Minimum value 1, Maximum value 1000
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingHistoryApi
     */
    historyTradesGet(symbol, sort, by, from, till, limit, offset, options) {
        return api_1.TradingHistoryApiFp(this.configuration).historyTradesGet(symbol, sort, by, from, till, limit, offset, options)(this.basePath);
    }
}
exports.TradingHistoryApi = TradingHistoryApi;
//# sourceMappingURL=TradingHistoryApi.js.map