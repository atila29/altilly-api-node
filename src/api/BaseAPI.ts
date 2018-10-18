import { Configuration } from "../configuration";
import { BASE_PATH } from "../api";
/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}