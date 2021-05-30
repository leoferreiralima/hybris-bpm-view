/**
 * A bpmn-aware factory for diagram-js shapes
 */
declare function ElementFactory(bpmnFactory: any, moddle: any, translate: any): void;
declare class ElementFactory {
    /**
     * A bpmn-aware factory for diagram-js shapes
     */
    constructor(bpmnFactory: any, moddle: any, translate: any);
    _bpmnFactory: any;
    _moddle: any;
    _translate: any;
    baseCreate: any;
    create(elementType: any, attrs: any): any;
    createBpmnElement(elementType: any, attrs: any): any;
    _getDefaultSize(semantic: any): {
        width: number;
        height: number;
    };
    /**
     * Create participant.
     *
     * @param {boolean|Object} [attrs] attrs
     *
     * @returns {djs.model.Shape}
     */
    createParticipantShape(attrs?: boolean | any): any;
}
declare namespace ElementFactory {
    const $inject: string[];
}
export default ElementFactory;
