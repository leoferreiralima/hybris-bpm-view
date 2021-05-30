/**
 * Return true if element has any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {Array<string>} types
 *
 * @return {boolean}
 */
export function isAny(element: any, types: Array<string>): boolean;
/**
 * Return the parent of the element with any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {string|Array<string>} anyType
 *
 * @return {djs.model.Base}
 */
export function getParent(element: any, anyType: string | Array<string>): any;
