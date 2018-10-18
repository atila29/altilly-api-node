"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
require("chai/register-should");
chai.use(chaiAsPromised);
const _1 = require(".");
ava_1.test("public call get currency should have status 200", () => __awaiter(this, void 0, void 0, function* () {
    const api = new _1.PublicApi();
    const result = yield api.publicCurrencyGet();
    result.status.should.equal(200);
}));
//# sourceMappingURL=index.test.js.map