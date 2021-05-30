/**
 * A handler that allows us to add a new lane
 * above or below an existing one.
 *
 * @param {Modeling} modeling
 * @param {SpaceTool} spaceTool
 */
declare function AddLaneHandler(modeling: any, spaceTool: any): void;
declare class AddLaneHandler {
    /**
     * A handler that allows us to add a new lane
     * above or below an existing one.
     *
     * @param {Modeling} modeling
     * @param {SpaceTool} spaceTool
     */
    constructor(modeling: any, spaceTool: any);
    _modeling: any;
    _spaceTool: any;
    preExecute(context: any): void;
}
declare namespace AddLaneHandler {
    const $inject: string[];
}
export default AddLaneHandler;
