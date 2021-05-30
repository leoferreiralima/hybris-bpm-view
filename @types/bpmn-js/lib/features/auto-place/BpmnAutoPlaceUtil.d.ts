/**
 * Find the new position for the target element to
 * connect to source.
 *
 * @param  {djs.model.Shape} source
 * @param  {djs.model.Shape} element
 *
 * @return {Point}
 */
export function getNewShapePosition(source: any, element: any): any;
/**
 * Always try to place element right of source;
 * compute actual distance from previous nodes in flow.
 */
export function getFlowNodePosition(source: any, element: any): any;
/**
 * Always try to place text annotations top right of source.
 */
export function getTextAnnotationPosition(source: any, element: any): any;
/**
 * Always put element bottom right of source.
 */
export function getDataElementPosition(source: any, element: any): any;
