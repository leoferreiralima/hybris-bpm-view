/**
 * A component that makes sure that external labels are added
 * together with respective elements and properly updated (DI wise)
 * during move.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 * @param {BpmnFactory} bpmnFactory
 * @param {TextRenderer} textRenderer
 */
declare function LabelBehavior(eventBus: any, modeling: any, bpmnFactory: any, textRenderer: any): void;
declare namespace LabelBehavior {
    const $inject: string[];
}
export default LabelBehavior;
/**
 * Calculates a reference point delta relative to a new position
 * of a certain element's bounds
 *
 * @param {Point} point
 * @param {Bounds} oldBounds
 * @param {Bounds} newBounds
 *
 * @return {Delta} delta
 */
export function getReferencePointDelta(referencePoint: any, oldBounds: any, newBounds: any): any;
/**
 * Generates the nearest point (reference point) for a given point
 * onto given set of lines
 *
 * @param {Array<Point, Point>} lines
 * @param {Point} point
 *
 * @param {Point}
 */
export function getReferencePoint(point: any, lines: Array<any, any>): any;
/**
 * Convert the given bounds to a lines array containing all edges
 *
 * @param {Bounds|Point} bounds
 *
 * @return Array<Point>
 */
export function asEdges(bounds: any | any): {
    x: any;
    y: any;
}[][];
