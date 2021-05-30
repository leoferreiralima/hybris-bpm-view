/**
 * Checks if eventDefinition of the given element matches with semantic type.
 *
 * @return {boolean} true if element is of the given semantic type
 */
export function isTypedEvent(event: any, eventDefinitionType: any, filter: any): boolean;
export function isThrowEvent(event: any): boolean;
export function isCollection(element: any): any;
export function getDi(element: any): any;
export function getSemantic(element: any): any;
export function getFillColor(element: any, defaultColor: any): any;
export function getStrokeColor(element: any, defaultColor: any): any;
export function getLabelColor(element: any, defaultColor: any, defaultStrokeColor: any): any;
export function getCirclePath(shape: any): any;
export function getRoundRectPath(shape: any, borderRadius: any): any;
export function getDiamondPath(shape: any): any;
export function getRectPath(shape: any): any;
