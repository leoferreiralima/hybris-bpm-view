/**
 * This module takes care of replacing BPMN elements
 */
declare function BpmnReplace(bpmnFactory: any, elementFactory: any, moddleCopy: any, modeling: any, replace: any, rules: any, selection: any): void;
declare class BpmnReplace {
    /**
     * This module takes care of replacing BPMN elements
     */
    constructor(bpmnFactory: any, elementFactory: any, moddleCopy: any, modeling: any, replace: any, rules: any, selection: any);
    replaceElement: (element: any, target: any, hints?: any) => any;
}
declare namespace BpmnReplace {
    const $inject: string[];
}
export default BpmnReplace;
