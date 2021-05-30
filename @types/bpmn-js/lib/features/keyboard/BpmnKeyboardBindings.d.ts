/**
 * BPMN 2.0 specific keyboard bindings.
 *
 * @param {Injector} injector
 */
declare function BpmnKeyboardBindings(injector: any): void;
declare class BpmnKeyboardBindings {
    /**
     * BPMN 2.0 specific keyboard bindings.
     *
     * @param {Injector} injector
     */
    constructor(injector: any);
    /**
     * Register available keyboard bindings.
     *
     * @param {Keyboard} keyboard
     * @param {EditorActions} editorActions
     */
    registerBindings(keyboard: any, editorActions: any): void;
}
declare namespace BpmnKeyboardBindings {
    const $inject: string[];
}
export default BpmnKeyboardBindings;
