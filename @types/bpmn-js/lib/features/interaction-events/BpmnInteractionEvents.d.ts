/**
 * BPMN-specific hit zones and interaction fixes.
 *
 * @param {EventBus} eventBus
 * @param {InteractionEvents} interactionEvents
 */
declare function BpmnInteractionEvents(eventBus: any, interactionEvents: any): void;
declare class BpmnInteractionEvents {
    /**
     * BPMN-specific hit zones and interaction fixes.
     *
     * @param {EventBus} eventBus
     * @param {InteractionEvents} interactionEvents
     */
    constructor(eventBus: any, interactionEvents: any);
    _interactionEvents: any;
    createDefaultHit(element: any, gfx: any): boolean;
    createParticipantHit(element: any, gfx: any): boolean;
    createSubProcessHit(element: any, gfx: any): boolean;
}
declare namespace BpmnInteractionEvents {
    const $inject: string[];
}
export default BpmnInteractionEvents;
