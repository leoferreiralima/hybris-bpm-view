/**
 * A handler that resizes a lane.
 *
 * @param {Modeling} modeling
 */
declare function ResizeLaneHandler(modeling: any, spaceTool: any): void;
declare class ResizeLaneHandler {
    /**
     * A handler that resizes a lane.
     *
     * @param {Modeling} modeling
     */
    constructor(modeling: any, spaceTool: any);
    _modeling: any;
    _spaceTool: any;
    preExecute(context: any): void;
    /**
     * Resize balanced, adjusting next / previous lane sizes.
     *
     * @param {djs.model.Shape} shape
     * @param {Bounds} newBounds
     */
    resizeBalanced(shape: any, newBounds: any): void;
    /**
     * Resize, making actual space and moving below / above elements.
     *
     * @param {djs.model.Shape} shape
     * @param {Bounds} newBounds
     */
    resizeSpace(shape: any, newBounds: any): void;
}
declare namespace ResizeLaneHandler {
    const $inject: string[];
}
export default ResizeLaneHandler;
