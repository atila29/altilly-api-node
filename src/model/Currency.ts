import { CurrencyCoininfo } from "./CurrencyCoininfo";
/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * Currency code
     * @type {string}
     * @memberof Currency
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    fullName?: string;
    /**
     * True for cryptocurrencies, false for fiat, ICO and others.
     * @type {boolean}
     * @memberof Currency
     */
    crypto?: boolean;
    /**
     * True if cryptocurrency support generate adress or paymentId for deposits
     * @type {boolean}
     * @memberof Currency
     */
    payinEnabled?: boolean;
    /**
     * True if cryptocurrency requred use paymentId for deposits
     * @type {boolean}
     * @memberof Currency
     */
    payinPaymentId?: boolean;
    /**
     * Confirmations count for cryptocurrency deposits
     * @type {number}
     * @memberof Currency
     */
    payinConfirmations?: number;
    /**
     *
     * @type {boolean}
     * @memberof Currency
     */
    payoutEnabled?: boolean;
    /**
     * Default withdraw fee
     * @type {string}
     * @memberof Currency
     */
    payoutFee?: string;
    /**
     * True if cryptocurrency allow use paymentId for withdraw
     * @type {boolean}
     * @memberof Currency
     */
    payoutIsPaymentId?: boolean;
    /**
     * True if currency delisted (stopped deposit and trading)
     * @type {boolean}
     * @memberof Currency
     */
    delisted?: boolean;
    /**
     *
     * @type {Array<CurrencyCoininfo>}
     * @memberof Currency
     */
    coininfo?: Array<CurrencyCoininfo>;
}