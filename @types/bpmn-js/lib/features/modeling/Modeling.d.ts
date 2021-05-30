/**
 * BPMN 2.0 modeling features activator
 *
 * @param {EventBus} eventBus
 * @param {ElementFactory} elementFactory
 * @param {CommandStack} commandStack
 * @param {BpmnRules} bpmnRules
 */
declare function Modeling(eventBus: any, elementFactory: any, commandStack: any, bpmnRules: any): void;
declare class Modeling {
    /**
     * BPMN 2.0 modeling features activator
     *
     * @param {EventBus} eventBus
     * @param {ElementFactory} elementFactory
     * @param {CommandStack} commandStack
     * @param {BpmnRules} bpmnRules
     */
    constructor(eventBus: any, elementFactory: any, commandStack: any, bpmnRules: any);
    _bpmnRules: any;
    getHandlers(): any;
    updateLabel(element: any, newLabel: any, newBounds: any, hints: any): void;
    connect(source: any, target: any, attrs: any, hints: any): any;
    updateModdleProperties(element: any, moddleElement: any, properties: any): void;
    updateProperties(element: any, properties: any): void;
    resizeLane(laneShape: any, newBounds: any, balanced: any): void;
    addLane(targetLaneShape: any, location: any): any;
    splitLane(targetLane: any, count: any): void;
    /**
     * Transform the current diagram into a collaboration.
     *
     * @return {djs.model.Root} the new root element
     */
    makeCollaboration(): any;
    updateLaneRefs(flowNodeShapes: any, laneShapes: any): void;
    /**
     * Transform the current diagram into a process.
     *
     * @return {djs.model.Root} the new root element
     */
    makeProcess(): any;
    claimId(id: any, moddleElement: any): void;
    unclaimId(id: any, moddleElement: any): void;
    setColor(elements: any, colors: any): void;
}
declare namespace Modeling {
    const $inject: string[];
}
export default Modeling;
