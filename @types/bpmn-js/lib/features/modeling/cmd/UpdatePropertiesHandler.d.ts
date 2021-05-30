/**
 * A handler that implements a BPMN 2.0 property update.
 *
 * This should be used to set simple properties on elements with
 * an underlying BPMN business object.
 *
 * Use respective diagram-js provided handlers if you would
 * like to perform automated modeling.
 */
declare function UpdatePropertiesHandler(elementRegistry: any, moddle: any, translate: any, modeling: any, textRenderer: any): void;
declare class UpdatePropertiesHandler {
    /**
     * A handler that implements a BPMN 2.0 property update.
     *
     * This should be used to set simple properties on elements with
     * an underlying BPMN business object.
     *
     * Use respective diagram-js provided handlers if you would
     * like to perform automated modeling.
     */
    constructor(elementRegistry: any, moddle: any, translate: any, modeling: any, textRenderer: any);
    _elementRegistry: any;
    _moddle: any;
    _translate: any;
    _modeling: any;
    _textRenderer: any;
    /**
     * Updates a BPMN element with a list of new properties
     *
     * @param {Object} context
     * @param {djs.model.Base} context.element the element to update
     * @param {Object} context.properties a list of properties to set on the element's
     *                                    businessObject (the BPMN model element)
     *
     * @return {Array<djs.model.Base>} the updated element
     */
    execute(context: {
        element: any;
        properties: any;
    }): Array<any>;
    postExecute(context: any): void;
    /**
     * Reverts the update on a BPMN elements properties.
     *
     * @param  {Object} context
     *
     * @return {djs.model.Base} the updated element
     */
    revert(context: any): any;
}
declare namespace UpdatePropertiesHandler {
    const $inject: string[];
}
export default UpdatePropertiesHandler;
