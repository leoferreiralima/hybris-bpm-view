/**
 * Returns the length of a vector
 *
 * @param {Vector}
 * @return {Float}
 */
export function vectorLength(v: any): any;
/**
 * Calculates the angle between a line a the yAxis
 *
 * @param {Array}
 * @return {Float}
 */
export function getAngle(line: any): any;
/**
 * Rotates a vector by a given angle
 *
 * @param {Vector}
 * @param {Float} Angle in radians
 * @return {Vector}
 */
export function rotateVector(vector: any, angle: any): any;
/**
 * Position of perpendicular foot
 *
 * @param {Point}
 * @param [ {Point}, {Point} ] line defined through two points
 * @return {Point} the perpendicular foot position
 */
export function perpendicularFoot(point: any, line: any): any;
/**
 * Calculates the distance between a point and a line
 *
 * @param {Point}
 * @param [ {Point}, {Point} ] line defined through two points
 * @return {Float} distance
 */
export function getDistancePointLine(point: any, line: any): any;
/**
 * Calculates the distance between two points
 *
 * @param {Point}
 * @param {Point}
 * @return {Float} distance
 */
export function getDistancePointPoint(point1: any, point2: any): any;
