/**
 * Returns true if the given semantic has an external label
 *
 * @param {BpmnElement} semantic
 * @return {boolean} true if has label
 */
export function isLabelExternal(semantic: any): boolean;
/**
 * Returns true if the given element has an external label
 *
 * @param {djs.model.shape} element
 * @return {boolean} true if has label
 */
export function hasExternalLabel(element: any): boolean;
/**
 * Get the position for sequence flow labels
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the label position
 */
export function getFlowLabelPosition(waypoints: Array<any>): any;
/**
 * Get the middle of a number of waypoints
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the mid point
 */
export function getWaypointsMid(waypoints: Array<any>): any;
export function getExternalLabelMid(element: any): any;
/**
 * Returns the bounds of an elements label, parsed from the elements DI or
 * generated from its bounds.
 *
 * @param {BpmnElement} semantic
 * @param {djs.model.Base} element
 */
export function getExternalLabelBounds(semantic: any, element: any): any;
export function isLabel(element: any): boolean;
export namespace DEFAULT_LABEL_SIZE {
    const width: number;
    const height: number;
}
export var FLOW_LABEL_INDENT: number;
