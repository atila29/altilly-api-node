import { Transaction } from "./model/Transaction";
import { TradingFee } from "./model/TradingFee";
import { Trade } from "./model/Trade";
import { Ticker } from "./model/Ticker";
import { Symbol } from "./model/Symbol";
import { SimpleTrade } from "./model/SimpleTrade";
import { SimpleOrder } from "./model/SimpleOrder";
import { PublicTrade } from "./model/PublicTrade";
import { Orderbook } from "./model/Orderbook";
import { Order } from "./model/Order";
import { Currency } from "./model/Currency";
import { Candle } from "./model/Candle";
import { BasicBalance } from "./model/BasicBalance";
import { Configuration } from "./configuration";
import { AxiosPromise } from 'axios';
import { DetailedBalance } from "./model/DetailedBalance";
import { Address } from "./model/Address";
import { WithdrawConfirm } from "./WithdrawConfirm";
export declare const BASE_PATH: string;
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface ErrorError
 */
export interface ErrorError {
    /**
     *
     * @type {number}
     * @memberof ErrorError
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof ErrorError
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorError
     */
    message?: ErrorError.MessageEnum;
}
/**
 * @export
 * @namespace ErrorError
 */
export declare namespace ErrorError {
    /**
     * @export
     * @enum {string}
     */
    enum MessageEnum {
        InternalServerError = "Internal Server Error",
        GatewayTimeout = "Gateway Timeout",
        ServiceUnavailable = "Service Unavailable",
        SymbolNotFound = "Symbol not found",
        AuthorisationRequired = "Authorisation required",
        AuthorisationFailed = "Authorisation failed",
        ValidationError = "Validation error",
        InsufficientFunds = "Insufficient funds"
    }
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    totalAmount?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    feeAmount?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    receiveAmount?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    confirmCode?: string;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse200
     */
    committed?: boolean;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    paymentId?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    id?: string;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse200
     */
    autoCommit?: boolean;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    currencyCode?: string;
}
/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {ErrorError}
     * @memberof ModelError
     */
    error?: ErrorError;
}
/**
 * AccountApi - axios parameter creator
 * @export
 */
export declare const AccountApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This returns available trading balance / funds held for orders / pending deposits and is a little slower than the tradingbalance call
     * @summary Get detailed acccount balance information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountBalanceGet(options?: any): RequestArgs;
    /**
     *
     * @summary Get deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyGet(currency: string, options?: any): RequestArgs;
    /**
     *
     * @summary Create new deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyPost(currency: string, options?: any): RequestArgs;
    /**
     * Cancel / Rollback a withdrawal request.  You may also request cancellation via the website interface
     * @summary Rollback withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdDelete(id: string, options?: any): RequestArgs;
    /**
     * Commit / Confirm the requested withdrawal if autoCommit was set to false
     * @summary Commit withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {string} confirmCode The confirmCode from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdPut(id: string, confirmCode: string, options?: any): RequestArgs;
    /**
     * Performs a withdrawal of a cryptocurrency to the requested address.  Withdrawal requests submitted via the API can only be confirmed/committed via the API.
     * @summary Withdraw crypto
     * @param {string} currency
     * @param {string} amount
     * @param {string} address
     * @param {string} [paymentId]
     * @param {boolean} [includeFee] If enabled, then fee will be subtracted from amount. Otherwise, the fee is added to the amount.
     * @param {boolean} [autoCommit] If Auto commit disabled you should commit it or rollback within 1 hour. After 1 hour, the transaction will expired automatically be rolled back.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawPost(currency: string, amount: string, address: string, paymentId?: string | undefined, includeFee?: boolean | undefined, autoCommit?: boolean | undefined, options?: any): RequestArgs;
    /**
     *
     * @summary Get account transactions (Deposits & Withdrawals)
     * @param {string} [currency]
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp'} [by] Filter field
     * @param {string} [from] Datetime in iso format or timestamp in millisecond.
     * @param {string} [till] Datetime in iso format or timestamp in millisecond.
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsGet(currency?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): RequestArgs;
    /**
     *
     * @summary Get account transactions by transactionId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsTransactionIdGet(transactionId: string, options?: any): RequestArgs;
};
/**
 * AccountApi - functional programming interface
 * @export
 */
export declare const AccountApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This returns available trading balance / funds held for orders / pending deposits and is a little slower than the tradingbalance call
     * @summary Get detailed acccount balance information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountBalanceGet(options?: any): (basePath?: string | undefined) => AxiosPromise<DetailedBalance[]>;
    /**
     *
     * @summary Get deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyGet(currency: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Address>;
    /**
     *
     * @summary Create new deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyPost(currency: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Address>;
    /**
     * Cancel / Rollback a withdrawal request.  You may also request cancellation via the website interface
     * @summary Rollback withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdDelete(id: string, options?: any): (basePath?: string | undefined) => AxiosPromise<WithdrawConfirm>;
    /**
     * Commit / Confirm the requested withdrawal if autoCommit was set to false
     * @summary Commit withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {string} confirmCode The confirmCode from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdPut(id: string, confirmCode: string, options?: any): (basePath?: string | undefined) => AxiosPromise<WithdrawConfirm>;
    /**
     * Performs a withdrawal of a cryptocurrency to the requested address.  Withdrawal requests submitted via the API can only be confirmed/committed via the API.
     * @summary Withdraw crypto
     * @param {string} currency
     * @param {string} amount
     * @param {string} address
     * @param {string} [paymentId]
     * @param {boolean} [includeFee] If enabled, then fee will be subtracted from amount. Otherwise, the fee is added to the amount.
     * @param {boolean} [autoCommit] If Auto commit disabled you should commit it or rollback within 1 hour. After 1 hour, the transaction will expired automatically be rolled back.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawPost(currency: string, amount: string, address: string, paymentId?: string | undefined, includeFee?: boolean | undefined, autoCommit?: boolean | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<InlineResponse200>;
    /**
     *
     * @summary Get account transactions (Deposits & Withdrawals)
     * @param {string} [currency]
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp'} [by] Filter field
     * @param {string} [from] Datetime in iso format or timestamp in millisecond.
     * @param {string} [till] Datetime in iso format or timestamp in millisecond.
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsGet(currency?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Transaction[]>;
    /**
     *
     * @summary Get account transactions by transactionId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsTransactionIdGet(transactionId: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Transaction[]>;
};
/**
 * AccountApi - factory interface
 * @export
 */
export declare const AccountApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined) => {
    /**
     * This returns available trading balance / funds held for orders / pending deposits and is a little slower than the tradingbalance call
     * @summary Get detailed acccount balance information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountBalanceGet(options?: any): AxiosPromise<DetailedBalance[]>;
    /**
     *
     * @summary Get deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyGet(currency: string, options?: any): AxiosPromise<Address>;
    /**
     *
     * @summary Create new deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoAddressCurrencyPost(currency: string, options?: any): AxiosPromise<Address>;
    /**
     * Cancel / Rollback a withdrawal request.  You may also request cancellation via the website interface
     * @summary Rollback withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdDelete(id: string, options?: any): AxiosPromise<WithdrawConfirm>;
    /**
     * Commit / Confirm the requested withdrawal if autoCommit was set to false
     * @summary Commit withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {string} confirmCode The confirmCode from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawIdPut(id: string, confirmCode: string, options?: any): AxiosPromise<WithdrawConfirm>;
    /**
     * Performs a withdrawal of a cryptocurrency to the requested address.  Withdrawal requests submitted via the API can only be confirmed/committed via the API.
     * @summary Withdraw crypto
     * @param {string} currency
     * @param {string} amount
     * @param {string} address
     * @param {string} [paymentId]
     * @param {boolean} [includeFee] If enabled, then fee will be subtracted from amount. Otherwise, the fee is added to the amount.
     * @param {boolean} [autoCommit] If Auto commit disabled you should commit it or rollback within 1 hour. After 1 hour, the transaction will expired automatically be rolled back.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountCryptoWithdrawPost(currency: string, amount: string, address: string, paymentId?: string | undefined, includeFee?: boolean | undefined, autoCommit?: boolean | undefined, options?: any): AxiosPromise<InlineResponse200>;
    /**
     *
     * @summary Get account transactions (Deposits & Withdrawals)
     * @param {string} [currency]
     * @param {'DESC' | 'ASC'} [sort] Sort direction
     * @param {'timestamp'} [by] Filter field
     * @param {string} [from] Datetime in iso format or timestamp in millisecond.
     * @param {string} [till] Datetime in iso format or timestamp in millisecond.
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsGet(currency?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<Transaction[]>;
    /**
     *
     * @summary Get account transactions by transactionId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountTransactionsTransactionIdGet(transactionId: string, options?: any): AxiosPromise<Transaction[]>;
};
/**
 * PublicApi - axios parameter creator
 * @export
 */
export declare const PublicApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     *
     * @summary Candles
     * @param {string} symbol
     * @param {number} [limit] Number of results to receive.  Default is 100.  Use 0 to receive all available resultset.
     * @param {'30MIN' | '3HR' | '8HR' | '12HR' | '24HR'} [period] Time period between candlesticks.  Available options are 30MIN, 3HR, 8HR, 12HR, 24HR
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCandlesSymbolGet(symbol: string, limit?: number | undefined, period?: "30MIN" | "3HR" | "8HR" | "12HR" | "24HR" | undefined, options?: any): RequestArgs;
    /**
     *
     * @summary Get currency info
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyCurrencyGet(currency: string, options?: any): RequestArgs;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyGet(options?: any): RequestArgs;
    /**
     *
     * @summary Orderbook
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicOrderbookSymbolGet(symbol: string, limit?: number | undefined, options?: any): RequestArgs;
    /**
     *
     * @summary Simple Orderbook format as used by Bitcoincharts and Tradingview.
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpleordersSymbolGet(symbol: string, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * This is the format used by Bitcoincharts and Tradingview.  Maximum 1000 results since the trade # \"since\" given
     * @summary A simple format of trades in the symbol as used by Bitcoincharts and Tradingview
     * @param {string} symbol
     * @param {string} [since]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpletradesSymbolGet(symbol: string, since?: string | undefined, options?: any): RequestArgs;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currency Symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolGet(options?: any): RequestArgs;
    /**
     *
     * @summary Get symbol info
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolSymbolGet(symbol: string, options?: any): RequestArgs;
    /**
     * The Ticker endpoint returns last 24H information about of all symbol.
     * @summary Ticker list for all symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerGet(options?: any): RequestArgs;
    /**
     * The Ticker endpoint returns last 24H information about symbol.
     * @summary Ticker for symbol
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerSymbolGet(symbol: string, options?: any): RequestArgs;
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
     */
    publicTradesSymbolGet(symbol: string, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): RequestArgs;
};
/**
 * PublicApi - functional programming interface
 * @export
 */
export declare const PublicApiFp: (configuration?: Configuration | undefined) => {
    /**
     *
     * @summary Candles
     * @param {string} symbol
     * @param {number} [limit] Number of results to receive.  Default is 100.  Use 0 to receive all available resultset.
     * @param {'30MIN' | '3HR' | '8HR' | '12HR' | '24HR'} [period] Time period between candlesticks.  Available options are 30MIN, 3HR, 8HR, 12HR, 24HR
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCandlesSymbolGet(symbol: string, limit?: number | undefined, period?: "30MIN" | "3HR" | "8HR" | "12HR" | "24HR" | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Candle[]>;
    /**
     *
     * @summary Get currency info
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyCurrencyGet(currency: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Currency>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyGet(options?: any): (basePath?: string | undefined) => AxiosPromise<Currency[]>;
    /**
     *
     * @summary Orderbook
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicOrderbookSymbolGet(symbol: string, limit?: number | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Orderbook>;
    /**
     *
     * @summary Simple Orderbook format as used by Bitcoincharts and Tradingview.
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpleordersSymbolGet(symbol: string, limit?: number | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<SimpleOrder>;
    /**
     * This is the format used by Bitcoincharts and Tradingview.  Maximum 1000 results since the trade # \"since\" given
     * @summary A simple format of trades in the symbol as used by Bitcoincharts and Tradingview
     * @param {string} symbol
     * @param {string} [since]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpletradesSymbolGet(symbol: string, since?: string | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<SimpleTrade>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currency Symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolGet(options?: any): (basePath?: string | undefined) => AxiosPromise<Symbol[]>;
    /**
     *
     * @summary Get symbol info
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolSymbolGet(symbol: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Symbol>;
    /**
     * The Ticker endpoint returns last 24H information about of all symbol.
     * @summary Ticker list for all symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerGet(options?: any): (basePath?: string | undefined) => AxiosPromise<Ticker[]>;
    /**
     * The Ticker endpoint returns last 24H information about symbol.
     * @summary Ticker for symbol
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerSymbolGet(symbol: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Ticker>;
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
     */
    publicTradesSymbolGet(symbol: string, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<PublicTrade[]>;
};
/**
 * PublicApi - factory interface
 * @export
 */
export declare const PublicApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined) => {
    /**
     *
     * @summary Candles
     * @param {string} symbol
     * @param {number} [limit] Number of results to receive.  Default is 100.  Use 0 to receive all available resultset.
     * @param {'30MIN' | '3HR' | '8HR' | '12HR' | '24HR'} [period] Time period between candlesticks.  Available options are 30MIN, 3HR, 8HR, 12HR, 24HR
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCandlesSymbolGet(symbol: string, limit?: number | undefined, period?: "30MIN" | "3HR" | "8HR" | "12HR" | "24HR" | undefined, options?: any): AxiosPromise<Candle[]>;
    /**
     *
     * @summary Get currency info
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyCurrencyGet(currency: string, options?: any): AxiosPromise<Currency>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currencies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicCurrencyGet(options?: any): AxiosPromise<Currency[]>;
    /**
     *
     * @summary Orderbook
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicOrderbookSymbolGet(symbol: string, limit?: number | undefined, options?: any): AxiosPromise<Orderbook>;
    /**
     *
     * @summary Simple Orderbook format as used by Bitcoincharts and Tradingview.
     * @param {string} symbol
     * @param {number} [limit] 0 - full orderbook otherwise number of levels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpleordersSymbolGet(symbol: string, limit?: number | undefined, options?: any): AxiosPromise<SimpleOrder>;
    /**
     * This is the format used by Bitcoincharts and Tradingview.  Maximum 1000 results since the trade # \"since\" given
     * @summary A simple format of trades in the symbol as used by Bitcoincharts and Tradingview
     * @param {string} symbol
     * @param {string} [since]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSimpletradesSymbolGet(symbol: string, since?: string | undefined, options?: any): AxiosPromise<SimpleTrade>;
    /**
     * Get list of avialable Symbols (Currency Pairs). You can read more info at http://www.investopedia.com/terms/c/currencypair.asp
     * @summary Available Currency Symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolGet(options?: any): AxiosPromise<Symbol[]>;
    /**
     *
     * @summary Get symbol info
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicSymbolSymbolGet(symbol: string, options?: any): AxiosPromise<Symbol>;
    /**
     * The Ticker endpoint returns last 24H information about of all symbol.
     * @summary Ticker list for all symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerGet(options?: any): AxiosPromise<Ticker[]>;
    /**
     * The Ticker endpoint returns last 24H information about symbol.
     * @summary Ticker for symbol
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publicTickerSymbolGet(symbol: string, options?: any): AxiosPromise<Ticker>;
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
     */
    publicTradesSymbolGet(symbol: string, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<PublicTrade[]>;
};
/**
 * TradingApi - axios parameter creator
 * @export
 */
export declare const TradingApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Cancel an order by clientOrderId -or- UUID
     * @summary Cancel an order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDDelete(clientOrderIdUUID: string, options?: any): RequestArgs;
    /**
     * Get a single order by clientOrderId or UUID. clientOrderId is assigned by the user, UUID is assigned by the server
     * @summary Get a single order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): RequestArgs;
    /**
     * Cancel a group of orders.  Enter market symbol to cancel all open orders in a single market.  Leave symbol empty to cancel all orders in all markets.
     * @summary Cancel all open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderDelete(symbol?: string | undefined, options?: any): RequestArgs;
    /**
     * List of your currently open orders.
     * @summary List your current open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderGet(symbol?: string | undefined, options?: any): RequestArgs;
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
     */
    orderPost(symbol: string, side: string, quantity: string, clientOrderId?: string | undefined, type?: string | undefined, timeInForce?: string | undefined, price?: string | undefined, stopPrice?: string | undefined, tpPrice?: string | undefined, expireTime?: any, strictValidate?: boolean | undefined, options?: any): RequestArgs;
    /**
     * This returns available trading balance for each currency
     * @summary Get basic trading balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingBalanceGet(options?: any): RequestArgs;
    /**
     *
     * @summary Get trading fee rate
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingFeeSymbolGet(symbol: string, options?: any): RequestArgs;
};
/**
 * TradingApi - functional programming interface
 * @export
 */
export declare const TradingApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Cancel an order by clientOrderId -or- UUID
     * @summary Cancel an order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDDelete(clientOrderIdUUID: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Order>;
    /**
     * Get a single order by clientOrderId or UUID. clientOrderId is assigned by the user, UUID is assigned by the server
     * @summary Get a single order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Order>;
    /**
     * Cancel a group of orders.  Enter market symbol to cancel all open orders in a single market.  Leave symbol empty to cancel all orders in all markets.
     * @summary Cancel all open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderDelete(symbol?: string | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Order[]>;
    /**
     * List of your currently open orders.
     * @summary List your current open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderGet(symbol?: string | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Order[]>;
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
     */
    orderPost(symbol: string, side: string, quantity: string, clientOrderId?: string | undefined, type?: string | undefined, timeInForce?: string | undefined, price?: string | undefined, stopPrice?: string | undefined, tpPrice?: string | undefined, expireTime?: any, strictValidate?: boolean | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Order>;
    /**
     * This returns available trading balance for each currency
     * @summary Get basic trading balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingBalanceGet(options?: any): (basePath?: string | undefined) => AxiosPromise<BasicBalance[]>;
    /**
     *
     * @summary Get trading fee rate
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingFeeSymbolGet(symbol: string, options?: any): (basePath?: string | undefined) => AxiosPromise<TradingFee>;
};
/**
 * TradingApi - factory interface
 * @export
 */
export declare const TradingApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined) => {
    /**
     * Cancel an order by clientOrderId -or- UUID
     * @summary Cancel an order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDDelete(clientOrderIdUUID: string, options?: any): AxiosPromise<Order>;
    /**
     * Get a single order by clientOrderId or UUID. clientOrderId is assigned by the user, UUID is assigned by the server
     * @summary Get a single order by clientOrderId -or- UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): AxiosPromise<Order>;
    /**
     * Cancel a group of orders.  Enter market symbol to cancel all open orders in a single market.  Leave symbol empty to cancel all orders in all markets.
     * @summary Cancel all open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderDelete(symbol?: string | undefined, options?: any): AxiosPromise<Order[]>;
    /**
     * List of your currently open orders.
     * @summary List your current open orders
     * @param {string} [symbol] Leave blank for all markets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    orderGet(symbol?: string | undefined, options?: any): AxiosPromise<Order[]>;
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
     */
    orderPost(symbol: string, side: string, quantity: string, clientOrderId?: string | undefined, type?: string | undefined, timeInForce?: string | undefined, price?: string | undefined, stopPrice?: string | undefined, tpPrice?: string | undefined, expireTime?: any, strictValidate?: boolean | undefined, options?: any): AxiosPromise<Order>;
    /**
     * This returns available trading balance for each currency
     * @summary Get basic trading balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingBalanceGet(options?: any): AxiosPromise<BasicBalance[]>;
    /**
     *
     * @summary Get trading fee rate
     * @param {string} symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tradingFeeSymbolGet(symbol: string, options?: any): AxiosPromise<TradingFee>;
};
/**
 * TradingHistoryApi - axios parameter creator
 * @export
 */
export declare const TradingHistoryApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
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
     */
    historyOrderGet(historytype: "cancelled" | "filled", symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, clientOrderId?: string | undefined, options?: any): RequestArgs;
    /**
     *
     * @summary Get your historical trades by specified clientOrderId -or- order UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    historyTradesClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): RequestArgs;
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
     */
    historyTradesGet(symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): RequestArgs;
};
/**
 * TradingHistoryApi - functional programming interface
 * @export
 */
export declare const TradingHistoryApiFp: (configuration?: Configuration | undefined) => {
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
     */
    historyOrderGet(historytype: "cancelled" | "filled", symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, clientOrderId?: string | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Order[]>;
    /**
     *
     * @summary Get your historical trades by specified clientOrderId -or- order UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    historyTradesClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): (basePath?: string | undefined) => AxiosPromise<Trade[]>;
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
     */
    historyTradesGet(symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): (basePath?: string | undefined) => AxiosPromise<Trade[]>;
};
/**
 * TradingHistoryApi - factory interface
 * @export
 */
export declare const TradingHistoryApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined) => {
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
     */
    historyOrderGet(historytype: "cancelled" | "filled", symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, clientOrderId?: string | undefined, options?: any): AxiosPromise<Order[]>;
    /**
     *
     * @summary Get your historical trades by specified clientOrderId -or- order UUID
     * @param {string} clientOrderIdUUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    historyTradesClientOrderIdUUIDGet(clientOrderIdUUID: string, options?: any): AxiosPromise<Trade[]>;
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
     */
    historyTradesGet(symbol?: string | undefined, sort?: "DESC" | "ASC" | undefined, by?: "timestamp" | "id" | undefined, from?: string | undefined, till?: string | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<Trade[]>;
};
