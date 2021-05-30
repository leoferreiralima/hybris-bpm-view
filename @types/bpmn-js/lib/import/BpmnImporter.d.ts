/**
 * An importer that adds bpmn elements to the canvas
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementFactory} elementFactory
 * @param {ElementRegistry} elementRegistry
 * @param {Function} translate
 * @param {TextRenderer} textRenderer
 */
declare function BpmnImporter(eventBus: any, canvas: any, elementFactory: any, elementRegistry: any, translate: Function, textRenderer: any): void;
declare class BpmnImporter {
    /**
     * An importer that adds bpmn elements to the canvas
     *
     * @param {EventBus} eventBus
     * @param {Canvas} canvas
     * @param {ElementFactory} elementFactory
     * @param {ElementRegistry} elementRegistry
     * @param {Function} translate
     * @param {TextRenderer} textRenderer
     */
    constructor(eventBus: any, canvas: any, elementFactory: any, elementRegistry: any, translate: Function, textRenderer: any);
    _eventBus: any;
    _canvas: any;
    _elementFactory: any;
    _elementRegistry: any;
    _translate: Function;
    _textRenderer: any;
    /**
     * Add bpmn element (semantic) to the canvas onto the
     * specified parent shape.
     */
    add(semantic: any, parentElement: any): any;
    /**
     * Attach the boundary element to the given host
     *
     * @param {ModdleElement} boundarySemantic
     * @param {djs.model.Base} boundaryElement
     */
    _attachBoundary(boundarySemantic: any, boundaryElement: any): void;
    /**
     * add label for an element
     */
    addLabel(semantic: any, element: any): any;
    /**
     * Return the drawn connection end based on the given side.
     *
     * @throws {Error} if the end is not yet drawn
     */
    _getEnd(semantic: any, side: any): any;
    _getSource(semantic: any): any;
    _getTarget(semantic: any): any;
    _getElement(semantic: any): any;
}
declare namespace BpmnImporter {
    const $inject: string[];
}
export default BpmnImporter;
