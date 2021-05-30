export = UpdateModdlePropertiesHandler;
declare function UpdateModdlePropertiesHandler(elementRegistry: any): void;
declare class UpdateModdlePropertiesHandler {
    constructor(elementRegistry: any);
    _elementRegistry: any;
    execute(context: any): any;
    revert(context: any): any;
    /**
     * Return visual references of given moddle element within the diagram.
     *
     * @param {ModdleElement} moddleElement
     *
     * @return {Array<djs.model.Element>}
     */
    getVisualReferences(moddleElement: any): Array<any>;
}
declare namespace UpdateModdlePropertiesHandler {
    const $inject: string[];
}
