/**
 * BPMN-specific replace behavior.
 */
declare function ReplaceElementBehaviour(bpmnReplace: any, bpmnRules: any, elementRegistry: any, injector: any, modeling: any, selection: any): void;
declare class ReplaceElementBehaviour {
    /**
     * BPMN-specific replace behavior.
     */
    constructor(bpmnReplace: any, bpmnRules: any, elementRegistry: any, injector: any, modeling: any, selection: any);
    _bpmnReplace: any;
    _elementRegistry: any;
    _selection: any;
    replaceElements(elements: any, newElements: any): void;
}
declare namespace ReplaceElementBehaviour {
    const $inject: string[];
}
export default ReplaceElementBehaviour;
