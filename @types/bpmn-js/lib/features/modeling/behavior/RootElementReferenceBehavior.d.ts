/**
 * Add referenced root elements (error, escalation, message, signal) if they don't exist.
 * Copy referenced root elements on copy & paste.
 */
declare function RootElementReferenceBehavior(bpmnjs: any, eventBus: any, injector: any, moddleCopy: any, bpmnFactory: any): void;
declare namespace RootElementReferenceBehavior {
    const $inject: string[];
}
export default RootElementReferenceBehavior;
