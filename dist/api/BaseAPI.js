"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = api_1.BASE_PATH) {
        this.basePath = basePath;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
//# sourceMappingURL=BaseAPI.js.map