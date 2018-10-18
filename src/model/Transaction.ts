/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    currency?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    paymentId?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    transactionId?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    status?: Transaction.StatusEnum;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    type?: Transaction.TypeEnum;
    /**
     *
     * @type {Date}
     * @memberof Transaction
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Transaction
     */
    updatedAt?: Date;
}

/**
 * @export
 * @namespace Transaction
 */
export namespace Transaction {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Created = 'created',
        Pending = 'pending',
        Failed = 'failed',
        Success = 'success'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Deposit = 'deposit',
        Withdraw = 'withdraw'
    }
}