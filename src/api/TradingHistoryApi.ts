import { BaseAPI } from "./BaseAPI";
import { TradingHistoryApiFp } from "../api";
/**
 * TradingHistoryApi - object-oriented interface
 * @export
 * @class TradingHistoryApi
 * @extends {BaseAPI}
 */
export class TradingHistoryApi extends BaseAPI {
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
    public historyOrderGet(historytype: 'filled' | 'cancelled', symbol?: string, sort?: 'DESC' | 'ASC', by?: 'timestamp' | 'id', from?: string, till?: string, limit?: number, offset?: number, clientOrderId?: string, options?: any) {
        return TradingHistoryApiFp(this.configuration).historyOrderGet(historytype, symbol, sort, by, from, till, limit, offset, clientOrderId, options)(this.basePath);
    }
    /**
     *
     * @summary Get your historical trades by specified clientOrderId -or- order UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradingHistoryApi
     */
    public historyTradesClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any) {
        return TradingHistoryApiFp(this.configuration).historyTradesClientOrderIdUUIDGet(clientOrderIdUUID, options)(this.basePath);
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
    public historyTradesGet(symbol?: string, sort?: 'DESC' | 'ASC', by?: 'timestamp' | 'id', from?: string, till?: string, limit?: number, offset?: number, options?: any) {
        return TradingHistoryApiFp(this.configuration).historyTradesGet(symbol, sort, by, from, till, limit, offset, options)(this.basePath);
    }
}