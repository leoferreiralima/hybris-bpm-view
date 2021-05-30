/**
 * Snaps connections with Manhattan layout.
 */
declare function LayoutConnectionBehavior(eventBus: any, gridSnapping: any, modeling: any): void;
declare class LayoutConnectionBehavior {
    /**
     * Snaps connections with Manhattan layout.
     */
    constructor(eventBus: any, gridSnapping: any, modeling: any);
    _gridSnapping: any;
    /**
     * Snap middle segments of a given connection.
     *
     * @param {Array<Point>} waypoints
     *
     * @returns {Array<Point>}
     */
    snapMiddleSegments(waypoints: Array<any>): Array<any>;
}
declare namespace LayoutConnectionBehavior {
    const $inject: string[];
}
export default LayoutConnectionBehavior;
