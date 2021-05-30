/**
 * A handler responsible for updating the underlying BPMN 2.0 XML + DI
 * once changes on the diagram happen
 */
declare function BpmnUpdater(eventBus: any, bpmnFactory: any, connectionDocking: any, translate: any): void;
declare class BpmnUpdater {
    /**
     * A handler responsible for updating the underlying BPMN 2.0 XML + DI
     * once changes on the diagram happen
     */
    constructor(eventBus: any, bpmnFactory: any, connectionDocking: any, translate: any);
    _bpmnFactory: any;
    _translate: any;
    updateAttachment(context: any): void;
    updateParent(element: any, oldParent: any): void;
    updateBounds(shape: any): void;
    updateFlowNodeRefs(businessObject: any, newContainment: any, oldContainment: any): void;
    updateDiConnection(di: any, newSource: any, newTarget: any): void;
    updateDiParent(di: any, parentDi: any): void;
    getLaneSet(container: any): any;
    updateSemanticParent(businessObject: any, newParent: any, visualParent: any): void;
    updateConnectionWaypoints(connection: any): void;
    updateConnection(context: any): void;
    _getLabel(di: any): any;
}
declare namespace BpmnUpdater {
    const $inject: string[];
}
export default BpmnUpdater;
