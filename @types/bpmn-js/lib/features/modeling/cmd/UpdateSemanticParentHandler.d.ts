declare function UpdateSemanticParentHandler(bpmnUpdater: any): void;
declare class UpdateSemanticParentHandler {
    constructor(bpmnUpdater: any);
    _bpmnUpdater: any;
    execute(context: any): void;
    revert(context: any): void;
}
declare namespace UpdateSemanticParentHandler {
    const $inject: string[];
}
export default UpdateSemanticParentHandler;
