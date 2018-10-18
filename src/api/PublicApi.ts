import { BaseAPI } from "./BaseAPI";
import { PublicApiFp } from "../api";
/**
 * PublicApi - object-oriented interface
 * @export
 * @class PublicApi
 * @extends {BaseAPI}
 */
export class PublicApi extends BaseAPI {
    /**
     *
     * @summary Candles
     * @param {string} symbol
     * @param {number} [limit] Number of results to receive.  Default is 100.  Use 0 to receive all available resultset.
     * @param {'30MIN' | '3HR' | '8HR' | '12HR' | '24HR'} [period] Time period between candlesticks.  Available options are 30MIN, 3HR, 8HR, 12HR, 24HR
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicCandlesSymbolGet(symbol: string, limit?: number, period?: '30MIN' | '3HR' | '8HR' | '12HR' | '24HR', options?: any) {
        return PublicApiFp(this.configuration).publicCandlesSymbolGet(symbol, limit, period, options)(this.basePath);
    }
    /**
     *
     * @summary Get currency info
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicCurrencyCurrencyGet(currency: string, options?: any) {
        return PublicApiFp(this.configuration).publicCurrencyCurrencyGet(currency, options)(this.basePath);
    }
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicCurrencyGet(options?: any) {
        return PublicApiFp(this.configuration).publicCurrencyGet(options)(this.basePath);
    }
    /**
     *
     * @summary Orderbook
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicOrderbookSymbolGet(symbol: string, limit?: number, options?: any) {
        return PublicApiFp(this.configuration).publicOrderbookSymbolGet(symbol, limit, options)(this.basePath);
    }
    /**
     *
     * @summary Simple Orderbook format as used by Bitcoincharts and Tradingview.
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicSimpleordersSymbolGet(symbol: string, limit?: number, options?: any) {
        return PublicApiFp(this.configuration).publicSimpleordersSymbolGet(symbol, limit, options)(this.basePath);
    }
    /**
     * This is the format used by Bitcoincharts and Tradingview.  Maximum 1000 results since the trade # \"since\" given
     * @summary A simple format of trades in the symbol as used by Bitcoincharts and Tradingview
     * @param {string} symbol
     * @param {string} [since]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicSimpletradesSymbolGet(symbol: string, since?: string, options?: any) {
        return PublicApiFp(this.configuration).publicSimpletradesSymbolGet(symbol, since, options)(this.basePath);
    }
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currency Symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicSymbolGet(options?: any) {
        return PublicApiFp(this.configuration).publicSymbolGet(options)(this.basePath);
    }
    /**
     *
     * @summary Get symbol info
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicSymbolSymbolGet(symbol: string, options?: any) {
        return PublicApiFp(this.configuration).publicSymbolSymbolGet(symbol, options)(this.basePath);
    }
    /**
     * The Ticker endpoint returns last 24H information about of all symbol.
     * @summary Ticker list for all symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicTickerGet(options?: any) {
        return PublicApiFp(this.configuration).publicTickerGet(options)(this.basePath);
    }
    /**
     * The Ticker endpoint returns last 24H information about symbol.
     * @summary Ticker for symbol
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicTickerSymbolGet(symbol: string, options?: any) {
        return PublicApiFp(this.configuration).publicTickerSymbolGet(symbol, options)(this.basePath);
    }
    /**
     *
     * @summary Trades
     * @param {string} symbol
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp' | 'id'} [by] Filter field
     * @param {string} [from] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise trade id
     * @param {string} [till] If filter by timestamp, then datetime in iso format or timestamp in millisecond otherwise trade id
     * @param {number} [limit] Default 100.  Minimum value 1, Maximum value 1000
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public publicTradesSymbolGet(symbol: string, sort?: 'DESC' | 'ASC', by?: 'timestamp' | 'id', from?: string, till?: string, limit?: number, offset?: number, options?: any) {
        return PublicApiFp(this.configuration).publicTradesSymbolGet(symbol, sort, by, from, till, limit, offset, options)(this.basePath);
    }
}