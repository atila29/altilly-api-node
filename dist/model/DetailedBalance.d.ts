/**
 *
 * @export
 * @interface DetailedBalance
 */
export interface DetailedBalance {
    /**
     *
     * @type {string}
     * @memberof DetailedBalance
     */
    currency?: string;
    /**
     * Amount available to spend
     * @type {string}
     * @memberof DetailedBalance
     */
    available?: string;
    /**
     * Amount reserved on orders or payout
     * @type {string}
     * @memberof DetailedBalance
     */
    reserved?: string;
    /**
     * Amount of pending deposits
     * @type {string}
     * @memberof DetailedBalance
     */
    pending?: string;
}
