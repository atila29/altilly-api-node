/**
 *
 * @export
 * @interface Address
 */
export interface Address {
    /**
     *
     * @type {string}
     * @memberof Address
     */
    currency?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof Address
     */
    paymentId?: string;
    /**
     *
     * @type {number}
     * @memberof Address
     */
    depositCount?: number;
}
