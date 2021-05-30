/**
 * This behavior makes sure we always set a fake
 * DataInputAssociation#targetRef as demanded by the BPMN 2.0
 * XSD schema.
 *
 * The reference is set to a bpmn:Property{ name: '__targetRef_placeholder' }
 * which is created on the fly and cleaned up afterwards if not needed
 * anymore.
 *
 * @param {EventBus} eventBus
 * @param {BpmnFactory} bpmnFactory
 */
declare function DataInputAssociationBehavior(eventBus: any, bpmnFactory: any): void;
declare namespace DataInputAssociationBehavior {
    const $inject: string[];
}
export default DataInputAssociationBehavior;
