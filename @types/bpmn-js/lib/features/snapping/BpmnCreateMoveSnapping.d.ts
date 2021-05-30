/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
declare function BpmnCreateMoveSnapping(eventBus: any, injector: any): void;
declare class BpmnCreateMoveSnapping {
    /**
     * Snap during create and move.
     *
     * @param {EventBus} eventBus
     * @param {Injector} injector
     */
    constructor(eventBus: any, injector: any);
    initSnap(event: any): any;
    addSnapTargetPoints(snapPoints: any, shape: any, target: any): any;
    getSnapTargets(shape: any, target: any): any;
}
declare namespace BpmnCreateMoveSnapping {
    const $inject: string[];
}
export default BpmnCreateMoveSnapping;
