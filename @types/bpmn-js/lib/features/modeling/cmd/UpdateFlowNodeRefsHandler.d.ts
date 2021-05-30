/**
 * A handler that updates lane refs on changed elements
 */
declare function UpdateFlowNodeRefsHandler(elementRegistry: any): void;
declare class UpdateFlowNodeRefsHandler {
    /**
     * A handler that updates lane refs on changed elements
     */
    constructor(elementRegistry: any);
    _elementRegistry: any;
    computeUpdates(flowNodeShapes: any, laneShapes: any): any[];
    execute(context: any): void;
    revert(context: any): void;
}
declare namespace UpdateFlowNodeRefsHandler {
    const $inject: string[];
}
export default UpdateFlowNodeRefsHandler;
