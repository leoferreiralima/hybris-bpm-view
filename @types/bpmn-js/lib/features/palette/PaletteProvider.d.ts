/**
 * A palette provider for BPMN 2.0 elements.
 */
declare function PaletteProvider(palette: any, create: any, elementFactory: any, spaceTool: any, lassoTool: any, handTool: any, globalConnect: any, translate: any): void;
declare class PaletteProvider {
    /**
     * A palette provider for BPMN 2.0 elements.
     */
    constructor(palette: any, create: any, elementFactory: any, spaceTool: any, lassoTool: any, handTool: any, globalConnect: any, translate: any);
    _palette: any;
    _create: any;
    _elementFactory: any;
    _spaceTool: any;
    _lassoTool: any;
    _handTool: any;
    _globalConnect: any;
    _translate: any;
    getPaletteEntries(element: any): {};
}
declare namespace PaletteProvider {
    const $inject: string[];
}
export default PaletteProvider;
