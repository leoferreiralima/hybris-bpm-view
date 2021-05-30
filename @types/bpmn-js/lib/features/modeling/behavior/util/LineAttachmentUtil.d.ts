/**
 * Return the attachment of the given point on the specified line.
 *
 * The attachment is either a bendpoint (attached to the given point)
 * or segment (attached to a location on a line segment) attachment:
 *
 * ```javascript
 * var pointAttachment = {
 *   type: 'bendpoint',
 *   bendpointIndex: 3,
 *   position: { x: 10, y: 10 } // the attach point on the line
 * };
 *
 * var segmentAttachment = {
 *   type: 'segment',
 *   segmentIndex: 2,
 *   relativeLocation: 0.31, // attach point location between 0 (at start) and 1 (at end)
 *   position: { x: 10, y: 10 } // the attach point on the line
 * };
 * ```
 *
 * @param {Point} point
 * @param {Array<Point>} line
 *
 * @return {Object} attachment
 */
export function getAttachment(point: any, line: Array<any>): any;
