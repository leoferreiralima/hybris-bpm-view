/**
 * Registers and executes BPMN specific editor actions.
 *
 * @param {Injector} injector
 */
declare function BpmnEditorActions(injector: any): void;
declare class BpmnEditorActions {
    /**
     * Registers and executes BPMN specific editor actions.
     *
     * @param {Injector} injector
     */
    constructor(injector: any);
    /**
     * Register default actions.
     *
     * @param {Injector} injector
     */
    _registerDefaultActions(injector: any): void;
}
declare namespace BpmnEditorActions {
    const $inject: string[];
}
export default BpmnEditorActions;
