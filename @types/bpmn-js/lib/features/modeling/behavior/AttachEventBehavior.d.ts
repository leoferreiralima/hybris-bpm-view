/**
 * Replace intermediate event with boundary event when creating or moving results in attached event.
 */
declare function AttachEventBehavior(bpmnReplace: any, injector: any): void;
declare class AttachEventBehavior {
    /**
     * Replace intermediate event with boundary event when creating or moving results in attached event.
     */
    constructor(bpmnReplace: any, injector: any);
    _bpmnReplace: any;
    replaceShape(shape: any, host: any): any;
}
declare namespace AttachEventBehavior {
    const $inject: string[];
}
export default AttachEventBehavior;
