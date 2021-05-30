/**
 * A behavior that unsets the Default property of
 * sequence flow source on element delete, if the
 * removed element is the Gateway or Task's default flow.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */
declare function DeleteSequenceFlowBehavior(eventBus: any, modeling: any): void;
declare namespace DeleteSequenceFlowBehavior {
    const $inject: string[];
}
export default DeleteSequenceFlowBehavior;
