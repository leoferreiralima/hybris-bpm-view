declare function LabelEditingProvider(eventBus: any, bpmnFactory: any, canvas: any, directEditing: any, modeling: any, resizeHandles: any, textRenderer: any): void;
declare class LabelEditingProvider {
    constructor(eventBus: any, bpmnFactory: any, canvas: any, directEditing: any, modeling: any, resizeHandles: any, textRenderer: any);
    _bpmnFactory: any;
    _canvas: any;
    _modeling: any;
    _textRenderer: any;
    /**
     * Activate direct editing for activities and text annotations.
     *
     * @param  {djs.model.Base} element
     *
     * @return {Object} an object with properties bounds (position and size), text and options
     */
    activate(element: any): any;
    /**
     * Get the editing bounding box based on the element's size and position
     *
     * @param  {djs.model.Base} element
     *
     * @return {Object} an object containing information about position
     *                  and size (fixed or minimum and/or maximum)
     */
    getEditingBBox(element: any): any;
    update(element: any, newLabel: any, activeContextText: any, bounds: any): void;
}
declare namespace LabelEditingProvider {
    const $inject: string[];
}
export default LabelEditingProvider;
