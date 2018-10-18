"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @export
 * @namespace Order
 */
var Order;
(function (Order) {
    /**
     * @export
     * @enum {string}
     */
    let SideEnum;
    (function (SideEnum) {
        SideEnum["Sell"] = "sell";
        SideEnum["Buy"] = "buy";
    })(SideEnum = Order.SideEnum || (Order.SideEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum["New"] = "new";
        StatusEnum["Suspended"] = "suspended";
        StatusEnum["PartiallyFilled"] = "partiallyFilled";
        StatusEnum["Filled"] = "filled";
        StatusEnum["Canceled"] = "canceled";
        StatusEnum["Expired"] = "expired";
        StatusEnum["Pending"] = "pending";
    })(StatusEnum = Order.StatusEnum || (Order.StatusEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum["Limit"] = "limit";
        TypeEnum["Market"] = "market";
        TypeEnum["StopLimit"] = "stopLimit";
        TypeEnum["StopMarket"] = "stopMarket";
    })(TypeEnum = Order.TypeEnum || (Order.TypeEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    let TimeInForceEnum;
    (function (TimeInForceEnum) {
        TimeInForceEnum["GTC"] = "GTC";
        TimeInForceEnum["IOC"] = "IOC";
        TimeInForceEnum["FOK"] = "FOK";
        TimeInForceEnum["Day"] = "Day";
        TimeInForceEnum["GTD"] = "GTD";
    })(TimeInForceEnum = Order.TimeInForceEnum || (Order.TimeInForceEnum = {}));
})(Order = exports.Order || (exports.Order = {}));
/**
 *
 * @export
 * @interface OrderTradesReport
 */
//# sourceMappingURL=Order.js.map