/**
 * This module is a provider for automatically resizing parent BPMN elements
 */
declare function BpmnAutoResizeProvider(eventBus: any, modeling: any): void;
declare class BpmnAutoResizeProvider {
    /**
     * This module is a provider for automatically resizing parent BPMN elements
     */
    constructor(eventBus: any, modeling: any);
    _modeling: any;
    /**
     * Check if the given target can be expanded
     *
     * @param  {djs.model.Shape} target
     *
     * @return {boolean}
     */
    canResize(elements: any, target: any): boolean;
}
declare namespace BpmnAutoResizeProvider {
    const $inject: string[];
}
export default BpmnAutoResizeProvider;
