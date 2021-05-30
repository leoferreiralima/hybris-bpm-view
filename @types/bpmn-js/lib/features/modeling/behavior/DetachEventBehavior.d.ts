/**
 * Replace boundary event with intermediate event when creating or moving results in detached event.
 */
declare function DetachEventBehavior(bpmnReplace: any, injector: any): void;
declare class DetachEventBehavior {
    /**
     * Replace boundary event with intermediate event when creating or moving results in detached event.
     */
    constructor(bpmnReplace: any, injector: any);
    _bpmnReplace: any;
    replaceShape(shape: any): any;
}
declare namespace DetachEventBehavior {
    const $inject: string[];
}
export default DetachEventBehavior;
