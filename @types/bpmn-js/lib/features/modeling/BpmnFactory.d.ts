declare function BpmnFactory(moddle: any): void;
declare class BpmnFactory {
    constructor(moddle: any);
    _model: any;
    _needsId(element: any): boolean;
    _ensureId(element: any): void;
    create(type: any, attrs: any): any;
    createDiLabel(): any;
    createDiShape(semantic: any, bounds: any, attrs: any): any;
    createDiBounds(bounds: any): any;
    createDiWaypoints(waypoints: any): any;
    createDiWaypoint(point: any): any;
    createDiEdge(semantic: any, waypoints: any, attrs: any): any;
    createDiPlane(semantic: any): any;
}
declare namespace BpmnFactory {
    const $inject: string[];
}
export default BpmnFactory;
