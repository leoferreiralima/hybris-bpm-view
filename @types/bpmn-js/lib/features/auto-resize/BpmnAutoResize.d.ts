/**
 * Sub class of the AutoResize module which implements a BPMN
 * specific resize function.
 */
declare function BpmnAutoResize(injector: any): void;
declare class BpmnAutoResize {
    /**
     * Sub class of the AutoResize module which implements a BPMN
     * specific resize function.
     */
    constructor(injector: any);
    /**
     * Resize shapes and lanes.
     *
     * @param {djs.model.Shape} target
     * @param {Bounds} newBounds
     * @param {Object} hints
     */
    resize(target: any, newBounds: any, hints: any): void;
}
declare namespace BpmnAutoResize {
    const $inject: string[];
}
export default BpmnAutoResize;
