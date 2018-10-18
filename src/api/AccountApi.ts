import { BaseAPI } from "./BaseAPI";
import { AccountApiFp } from "../api";
/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * This returns available trading balance / funds held for orders / pending deposits and is a little slower than the tradingbalance call
     * @summary Get detailed acccount balance information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountBalanceGet(options?: any) {
        return AccountApiFp(this.configuration).accountBalanceGet(options)(this.basePath);
    }
    /**
     *
     * @summary Get deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountCryptoAddressCurrencyGet(currency: string, options?: any) {
        return AccountApiFp(this.configuration).accountCryptoAddressCurrencyGet(currency, options)(this.basePath);
    }
    /**
     *
     * @summary Create new deposit crypro address
     * @param {string} currency
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountCryptoAddressCurrencyPost(currency: string, options?: any) {
        return AccountApiFp(this.configuration).accountCryptoAddressCurrencyPost(currency, options)(this.basePath);
    }
    /**
     * Cancel / Rollback a withdrawal request.  You may also request cancellation via the website interface
     * @summary Rollback withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountCryptoWithdrawIdDelete(id: string, options?: any) {
        return AccountApiFp(this.configuration).accountCryptoWithdrawIdDelete(id, options)(this.basePath);
    }
    /**
     * Commit / Confirm the requested withdrawal if autoCommit was set to false
     * @summary Commit withdraw crypto
     * @param {string} id The ID of the transaction from the withdraw request
     * @param {string} confirmCode The confirmCode from the withdraw request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountCryptoWithdrawIdPut(id: string, confirmCode: string, options?: any) {
        return AccountApiFp(this.configuration).accountCryptoWithdrawIdPut(id, confirmCode, options)(this.basePath);
    }
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
     * @memberof AccountApi
     */
    public accountCryptoWithdrawPost(currency: string, amount: string, address: string, paymentId?: string, includeFee?: boolean, autoCommit?: boolean, options?: any) {
        return AccountApiFp(this.configuration).accountCryptoWithdrawPost(currency, amount, address, paymentId, includeFee, autoCommit, options)(this.basePath);
    }
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
     * @memberof AccountApi
     */
    public accountTransactionsGet(currency?: string, sort?: 'DESC' | 'ASC', by?: 'timestamp', from?: string, till?: string, limit?: number, offset?: number, options?: any) {
        return AccountApiFp(this.configuration).accountTransactionsGet(currency, sort, by, from, till, limit, offset, options)(this.basePath);
    }
    /**
     *
     * @summary Get account transactions by transactionId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountTransactionsTransactionIdGet(transactionId: string, options?: any) {
        return AccountApiFp(this.configuration).accountTransactionsTransactionIdGet(transactionId, options)(this.basePath);
    }
}