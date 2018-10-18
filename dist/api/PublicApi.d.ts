import { BaseAPI } from "./BaseAPI";
/**
 * PublicApi - object-oriented interface
 * @export
 * @class PublicApi
 * @extends {BaseAPI}
 */
export declare class PublicApi extends BaseAPI {
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
    publicCandlesSymbolGet(symbol: string, limit?: number, period?: '30MIN' | '3HR' | '8HR' | '12HR' | '24HR', options?: any): import("axios").AxiosPromise<import("../model/Candle").Candle[]>;
    /**
     *
     * @summary Get currency info
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicCurrencyCurrencyGet(currency: string, options?: any): import("axios").AxiosPromise<import("../model/Currency").Currency>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicCurrencyGet(options?: any): import("axios").AxiosPromise<import("../model/Currency").Currency[]>;
    /**
     *
     * @summary Orderbook
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicOrderbookSymbolGet(symbol: string, limit?: number, options?: any): import("axios").AxiosPromise<import("../model/Orderbook").Orderbook>;
    /**
     *
     * @summary Simple Orderbook format as used by Bitcoincharts and Tradingview.
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicSimpleordersSymbolGet(symbol: string, limit?: number, options?: any): import("axios").AxiosPromise<import("../model/SimpleOrder").SimpleOrder>;
    /**
     * This is the format used by Bitcoincharts and Tradingview.  Maximum 1000 results since the trade # \"since\" given
     * @summary A simple format of trades in the symbol as used by Bitcoincharts and Tradingview
     * @param {string} symbol
     * @param {string} [since]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicSimpletradesSymbolGet(symbol: string, since?: string, options?: any): import("axios").AxiosPromise<import("../model/SimpleTrade").SimpleTrade>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currency Symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicSymbolGet(options?: any): import("axios").AxiosPromise<import("../model/Symbol").Symbol[]>;
    /**
     *
     * @summary Get symbol info
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicSymbolSymbolGet(symbol: string, options?: any): import("axios").AxiosPromise<import("../model/Symbol").Symbol>;
    /**
     * The Ticker endpoint returns last 24H information about of all symbol.
     * @summary Ticker list for all symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicTickerGet(options?: any): import("axios").AxiosPromise<import("../model/Ticker").Ticker[]>;
    /**
     * The Ticker endpoint returns last 24H information about symbol.
     * @summary Ticker for symbol
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    publicTickerSymbolGet(symbol: string, options?: any): import("axios").AxiosPromise<import("../model/Ticker").Ticker>;
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
    publicTradesSymbolGet(symbol: string, sort?: 'DESC' | 'ASC', by?: 'timestamp' | 'id', from?: string, till?: string, limit?: number, offset?: number, options?: any): import("axios").AxiosPromise<import("../model/PublicTrade").PublicTrade[]>;
}
