/**
 * Collect all lane shapes in the given paren
 *
 * @param  {djs.model.Shape} shape
 * @param  {Array<djs.model.Base>} [collectedShapes]
 *
 * @return {Array<djs.model.Base>}
 */
export function collectLanes(shape: any, collectedShapes?: Array<any>): Array<any>;
/**
 * Return the lane children of the given element.
 *
 * @param {djs.model.Shape} shape
 *
 * @return {Array<djs.model.Shape>}
 */
export function getChildLanes(shape: any): Array<any>;
/**
 * Return the root element containing the given lane shape
 *
 * @param {djs.model.Shape} shape
 *
 * @return {djs.model.Shape}
 */
export function getLanesRoot(shape: any): any;
/**
 * Compute the required resize operations for lanes
 * adjacent to the given shape, assuming it will be
 * resized to the given new bounds.
 *
 * @param {djs.model.Shape} shape
 * @param {Bounds} newBounds
 *
 * @return {Array<Object>}
 */
export function computeLanesResize(shape: any, newBounds: any): Array<any>;
export var LANE_INDENTATION: number;
