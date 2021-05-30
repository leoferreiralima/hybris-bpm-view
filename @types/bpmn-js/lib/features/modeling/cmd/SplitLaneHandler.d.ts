/**
 * A handler that splits a lane into a number of sub-lanes,
 * creating new sub lanes, if necessary.
 *
 * @param {Modeling} modeling
 */
declare function SplitLaneHandler(modeling: any, translate: any): void;
declare class SplitLaneHandler {
    /**
     * A handler that splits a lane into a number of sub-lanes,
     * creating new sub lanes, if necessary.
     *
     * @param {Modeling} modeling
     */
    constructor(modeling: any, translate: any);
    _modeling: any;
    _translate: any;
    preExecute(context: any): void;
}
declare namespace SplitLaneHandler {
    const $inject: string[];
}
export default SplitLaneHandler;
