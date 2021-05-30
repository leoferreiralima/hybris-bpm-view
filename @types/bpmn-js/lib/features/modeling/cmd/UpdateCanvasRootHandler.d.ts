declare function UpdateCanvasRootHandler(canvas: any, modeling: any): void;
declare class UpdateCanvasRootHandler {
    constructor(canvas: any, modeling: any);
    _canvas: any;
    _modeling: any;
    execute(context: any): void;
    revert(context: any): void;
}
declare namespace UpdateCanvasRootHandler {
    const $inject: string[];
}
export default UpdateCanvasRootHandler;
