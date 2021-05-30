/**
 * BPMN specific modeling rule
 */
declare function BpmnRules(eventBus: any): void;
declare class BpmnRules {
    /**
     * BPMN specific modeling rule
     */
    constructor(eventBus: any);
    init(): void;
    canConnectMessageFlow: typeof canConnectMessageFlow;
    canConnectSequenceFlow: typeof canConnectSequenceFlow;
    canConnectDataAssociation: typeof canConnectDataAssociation;
    canConnectAssociation: typeof canConnectAssociation;
    canMove: typeof canMove;
    canAttach: typeof canAttach;
    canReplace: typeof canReplace;
    canDrop: typeof canDrop;
    canInsert: typeof canInsert;
    canCreate: typeof canCreate;
    canConnect: typeof canConnect;
    canResize: typeof canResize;
    canCopy: typeof canCopy;
}
declare namespace BpmnRules {
    const $inject: string[];
}
export default BpmnRules;
declare function canConnectMessageFlow(source: any, target: any): boolean;
declare function canConnectSequenceFlow(source: any, target: any): boolean;
declare function canConnectDataAssociation(source: any, target: any): false | {
    type: string;
};
declare function canConnectAssociation(source: any, target: any): boolean;
declare function canMove(elements: any, target: any): any;
declare function canAttach(elements: any, target: any, source: any, position: any): false | "attach";
/**
 * Defines how to replace elements for a given target.
 *
 * Returns an array containing all elements which will be replaced.
 *
 * @example
 *
 *  [{ id: 'IntermediateEvent_2',
 *     type: 'bpmn:StartEvent'
 *   },
 *   { id: 'IntermediateEvent_5',
 *     type: 'bpmn:EndEvent'
 *   }]
 *
 * @param  {Array} elements
 * @param  {Object} target
 *
 * @return {Object} an object containing all elements which have to be replaced
 */
declare function canReplace(elements: any[], target: any, position: any): any;
/**
 * Can an element be dropped into the target element
 *
 * @return {boolean}
 */
declare function canDrop(element: any, target: any, position: any): boolean;
declare function canInsert(shape: any, flow: any, position: any): boolean;
declare function canCreate(shape: any, target: any, source: any, position: any): boolean;
declare function canConnect(source: any, target: any, connection: any): false | {
    type: string;
};
declare function canResize(shape: any, newBounds: any): boolean;
declare function canCopy(elements: any, element: any): boolean;
