export function findNewLabelLineStartIndex(oldWaypoints: any, newWaypoints: any, attachment: any, hints: any): any;
/**
 * Calculate the required adjustment (move delta) for the given label
 * after the connection waypoints got updated.
 *
 * @param {djs.model.Label} label
 * @param {Array<Point>} newWaypoints
 * @param {Array<Point>} oldWaypoints
 * @param {Object} hints
 *
 * @return {Point} delta
 */
export function getLabelAdjustment(label: any, newWaypoints: Array<any>, oldWaypoints: Array<any>, hints: any): any;
