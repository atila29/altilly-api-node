import { Configuration } from "../configuration";
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected configuration: Configuration | undefined;
    constructor(configuration?: Configuration, basePath?: string);
}
