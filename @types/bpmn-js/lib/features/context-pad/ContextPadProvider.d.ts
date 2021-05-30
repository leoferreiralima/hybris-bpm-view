/**
 * A provider for BPMN 2.0 elements context pad
 */
declare function ContextPadProvider(config: any, injector: any, eventBus: any, contextPad: any, modeling: any, elementFactory: any, connect: any, create: any, popupMenu: any, canvas: any, rules: any, translate: any): void;
declare class ContextPadProvider {
    /**
     * A provider for BPMN 2.0 elements context pad
     */
    constructor(config: any, injector: any, eventBus: any, contextPad: any, modeling: any, elementFactory: any, connect: any, create: any, popupMenu: any, canvas: any, rules: any, translate: any);
    _contextPad: any;
    _modeling: any;
    _elementFactory: any;
    _connect: any;
    _create: any;
    _popupMenu: any;
    _canvas: any;
    _rules: any;
    _translate: any;
    _autoPlace: any;
    getContextPadEntries(element: any): {};
}
declare namespace ContextPadProvider {
    const $inject: string[];
}
export default ContextPadProvider;
