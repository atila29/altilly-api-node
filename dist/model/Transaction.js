"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @export
 * @namespace Transaction
 */
var Transaction;
(function (Transaction) {
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum["Created"] = "created";
        StatusEnum["Pending"] = "pending";
        StatusEnum["Failed"] = "failed";
        StatusEnum["Success"] = "success";
    })(StatusEnum = Transaction.StatusEnum || (Transaction.StatusEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Deposit"] = "deposit";
        TypeEnum["Withdraw"] = "withdraw";
    })(TypeEnum = Transaction.TypeEnum || (Transaction.TypeEnum = {}));
})(Transaction = exports.Transaction || (exports.Transaction = {}));
//# sourceMappingURL=Transaction.js.map