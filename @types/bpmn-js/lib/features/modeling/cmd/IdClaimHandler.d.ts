declare function IdClaimHandler(moddle: any): void;
declare class IdClaimHandler {
    constructor(moddle: any);
    _moddle: any;
    execute(context: any): void;
    /**
     * Command revert implementation.
     */
    revert(context: any): void;
}
declare namespace IdClaimHandler {
    const $inject: string[];
}
export default IdClaimHandler;
