/**
 * A handler that updates the text of a BPMN element.
 */
declare function UpdateLabelHandler(modeling: any, textRenderer: any): void;
declare class UpdateLabelHandler {
    /**
     * A handler that updates the text of a BPMN element.
     */
    constructor(modeling: any, textRenderer: any);
    preExecute: (ctx: any) => void;
    execute: (ctx: any) => any[];
    revert: (ctx: any) => any[];
    postExecute: (ctx: any) => void;
}
declare namespace UpdateLabelHandler {
    const $inject: string[];
}
export default UpdateLabelHandler;
