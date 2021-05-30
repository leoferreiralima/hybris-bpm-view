/**
 * A modeler for BPMN 2.0 diagrams.
 *
 *
 * ## Extending the Modeler
 *
 * In order to extend the viewer pass extension modules to bootstrap via the
 * `additionalModules` option. An extension module is an object that exposes
 * named services.
 *
 * The following example depicts the integration of a simple
 * logging component that integrates with interaction events:
 *
 *
 * ```javascript
 *
 * // logging component
 * function InteractionLogger(eventBus) {
 *   eventBus.on('element.hover', function(event) {
 *     console.log()
 *   })
 * }
 *
 * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
 *
 * // extension module
 * var extensionModule = {
 *   __init__: [ 'interactionLogger' ],
 *   interactionLogger: [ 'type', InteractionLogger ]
 * };
 *
 * // extend the viewer
 * var bpmnModeler = new Modeler({ additionalModules: [ extensionModule ] });
 * bpmnModeler.importXML(...);
 * ```
 *
 *
 * ## Customizing / Replacing Components
 *
 * You can replace individual diagram components by redefining them in override modules.
 * This works for all components, including those defined in the core.
 *
 * Pass in override modules via the `options.additionalModules` flag like this:
 *
 * ```javascript
 * function CustomContextPadProvider(contextPad) {
 *
 *   contextPad.registerProvider(this);
 *
 *   this.getContextPadEntries = function(element) {
 *     // no entries, effectively disable the context pad
 *     return {};
 *   };
 * }
 *
 * CustomContextPadProvider.$inject = [ 'contextPad' ];
 *
 * var overrideModule = {
 *   contextPadProvider: [ 'type', CustomContextPadProvider ]
 * };
 *
 * var bpmnModeler = new Modeler({ additionalModules: [ overrideModule ]});
 * ```
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {string|number} [options.width] the width of the viewer
 * @param {string|number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

import BaseModeler from './BaseModeler'

declare function Modeler(options?: {
    container?: any;
    width?: string | number;
    height?: string | number;
    moddleExtensions?: any;
    modules?: Array<any>;
    additionalModules?: Array<any>;
}): void;
declare class Modeler extends BaseModeler{
    /**
     * A modeler for BPMN 2.0 diagrams.
     *
     *
     * ## Extending the Modeler
     *
     * In order to extend the viewer pass extension modules to bootstrap via the
     * `additionalModules` option. An extension module is an object that exposes
     * named services.
     *
     * The following example depicts the integration of a simple
     * logging component that integrates with interaction events:
     *
     *
     * ```javascript
     *
     * // logging component
     * function InteractionLogger(eventBus) {
     *   eventBus.on('element.hover', function(event) {
     *     console.log()
     *   })
     * }
     *
     * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
     *
     * // extension module
     * var extensionModule = {
     *   __init__: [ 'interactionLogger' ],
     *   interactionLogger: [ 'type', InteractionLogger ]
     * };
     *
     * // extend the viewer
     * var bpmnModeler = new Modeler({ additionalModules: [ extensionModule ] });
     * bpmnModeler.importXML(...);
     * ```
     *
     *
     * ## Customizing / Replacing Components
     *
     * You can replace individual diagram components by redefining them in override modules.
     * This works for all components, including those defined in the core.
     *
     * Pass in override modules via the `options.additionalModules` flag like this:
     *
     * ```javascript
     * function CustomContextPadProvider(contextPad) {
     *
     *   contextPad.registerProvider(this);
     *
     *   this.getContextPadEntries = function(element) {
     *     // no entries, effectively disable the context pad
     *     return {};
     *   };
     * }
     *
     * CustomContextPadProvider.$inject = [ 'contextPad' ];
     *
     * var overrideModule = {
     *   contextPadProvider: [ 'type', CustomContextPadProvider ]
     * };
     *
     * var bpmnModeler = new Modeler({ additionalModules: [ overrideModule ]});
     * ```
     *
     * @param {Object} [options] configuration options to pass to the viewer
     * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
     * @param {string|number} [options.width] the width of the viewer
     * @param {string|number} [options.height] the height of the viewer
     * @param {Object} [options.moddleExtensions] extension packages to provide
     * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
     * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
     */
    constructor(options?: {
        container?: any;
        width?: string | number;
        height?: string | number;
        moddleExtensions?: any;
        modules?: Array<any>;
        additionalModules?: Array<any>;
    });
    /**
    * The createDiagram result.
    *
    * @typedef {Object} CreateDiagramResult
    *
    * @property {Array<string>} warnings
    */
    /**
    * The createDiagram error.
    *
    * @typedef {Error} CreateDiagramError
    *
    * @property {Array<string>} warnings
    */
    /**
     * Create a new diagram to start modeling.
     *
     * Returns {Promise<CreateDiagramResult, CreateDiagramError>}
     */
    createDiagram: (...args: any[]) => any;
    /**
     * Create a moddle instance, attaching ids to it.
     *
     * @param {Object} options
     */
     _createModdle(options: any): any;
     /**
      * Collect ids processed during parsing of the
      * definitions object.
      *
      * @param {ModdleElement} definitions
      * @param {Context} context
      */
     _collectIds(definitions: any, elementsById: any): void;
       /**
    * The importXML result.
    *
    * @typedef {Object} ImportXMLResult
    *
    * @property {Array<string>} warnings
    */
    /**
    * The importXML error.
    *
    * @typedef {Error} ImportXMLError
    *
    * @property {Array<string>} warnings
    */
    /**
     * Parse and render a BPMN 2.0 diagram.
     *
     * Once finished the viewer reports back the result to the
     * provided callback function with (err, warnings).
     *
     * ## Life-Cycle Events
     *
     * During import the viewer will fire life-cycle events:
     *
     *   * import.parse.start (about to read model from xml)
     *   * import.parse.complete (model read; may have worked or not)
     *   * import.render.start (graphical import start)
     *   * import.render.complete (graphical import finished)
     *   * import.done (everything done)
     *
     * You can use these events to hook into the life-cycle.
     *
     * @param {string} xml the BPMN 2.0 xml
     * @param {ModdleElement<BPMNDiagram>|string} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
     *
     * Returns {Promise<ImportXMLResult, ImportXMLError>}
     */
    importXML: (...args: any[]) => any;
    /**
    * The importDefinitions result.
    *
    * @typedef {Object} ImportDefinitionsResult
    *
    * @property {Array<string>} warnings
    */
    /**
    * The importDefinitions error.
    *
    * @typedef {Error} ImportDefinitionsError
    *
    * @property {Array<string>} warnings
    */
    /**
     * Import parsed definitions and render a BPMN 2.0 diagram.
     *
     * Once finished the viewer reports back the result to the
     * provided callback function with (err, warnings).
     *
     * ## Life-Cycle Events
     *
     * During import the viewer will fire life-cycle events:
     *
     *   * import.render.start (graphical import start)
     *   * import.render.complete (graphical import finished)
     *
     * You can use these events to hook into the life-cycle.
     *
     * @param {ModdleElement<Definitions>} definitions parsed BPMN 2.0 definitions
     * @param {ModdleElement<BPMNDiagram>|string} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
     *
     * Returns {Promise<ImportDefinitionsResult, ImportDefinitionsError>}
     */
    importDefinitions: (...args: any[]) => any;
    /**
     * The open result.
     *
     * @typedef {Object} OpenResult
     *
     * @property {Array<string>} warnings
     */
    /**
    * The open error.
    *
    * @typedef {Error} OpenError
    *
    * @property {Array<string>} warnings
    */
    /**
     * Open diagram of previously imported XML.
     *
     * Once finished the viewer reports back the result to the
     * provided callback function with (err, warnings).
     *
     * ## Life-Cycle Events
     *
     * During switch the viewer will fire life-cycle events:
     *
     *   * import.render.start (graphical import start)
     *   * import.render.complete (graphical import finished)
     *
     * You can use these events to hook into the life-cycle.
     *
     * @param {string|ModdleElement<BPMNDiagram>} [bpmnDiagramOrId] id or the diagram to open
     *
     * Returns {Promise<OpenResult, OpenError>}
     */
    open: (...args: any[]) => any;
    /**
     * The saveXML result.
     *
     * @typedef {Object} SaveXMLResult
     *
     * @property {string} xml
     */
    /**
     * Export the currently displayed BPMN 2.0 diagram as
     * a BPMN 2.0 XML document.
     *
     * ## Life-Cycle Events
     *
     * During XML saving the viewer will fire life-cycle events:
     *
     *   * saveXML.start (before serialization)
     *   * saveXML.serialized (after xml generation)
     *   * saveXML.done (everything done)
     *
     * You can use these events to hook into the life-cycle.
     *
     * @param {Object} [options] export options
     * @param {boolean} [options.format=false] output formatted XML
     * @param {boolean} [options.preamble=true] output preamble
     *
     * Returns {Promise<SaveXMLResult, Error>}
     */
    saveXML: (...args: any[]) => any;
    /**
     * The saveSVG result.
     *
     * @typedef {Object} SaveSVGResult
     *
     * @property {string} svg
     */
    /**
     * Export the currently displayed BPMN 2.0 diagram as
     * an SVG image.
     *
     * ## Life-Cycle Events
     *
     * During SVG saving the viewer will fire life-cycle events:
     *
     *   * saveSVG.start (before serialization)
     *   * saveSVG.done (everything done)
     *
     * You can use these events to hook into the life-cycle.
     *
     * @param {Object} [options]
     *
     * Returns {Promise<SaveSVGResult, Error>}
     */
    saveSVG: (...args: any[]) => any;
    /**
     * Get a named diagram service.
     *
     * @example
     *
     * var elementRegistry = viewer.get('elementRegistry');
     * var startEventShape = elementRegistry.get('StartEvent_1');
     *
     * @param {string} name
     *
     * @return {Object} diagram service instance
     *
     * @method BaseViewer#get
     */
    /**
     * Invoke a function in the context of this viewer.
     *
     * @example
     *
     * viewer.invoke(function(elementRegistry) {
     *   var startEventShape = elementRegistry.get('StartEvent_1');
     * });
     *
     * @param {Function} fn to be invoked
     *
     * @return {Object} the functions return value
     *
     * @method BaseViewer#invoke
     */
    _setDefinitions(definitions: any): any;
    _definitions: any;
    getModules(): any[];
    /**
     * Remove all drawn elements from the viewer.
     *
     * After calling this method the viewer can still
     * be reused for opening another diagram.
     *
     * @method BaseViewer#clear
     */
    clear(): void;
    /**
     * Destroy the viewer instance and remove all its
     * remainders from the document tree.
     */
    destroy(): void;
    /**
     * Register an event listener
     *
     * Remove a previously added listener via {@link #off(event, callback)}.
     *
     * @param {string} event
     * @param {number} [priority]
     * @param {Function} callback
     * @param {Object} [that]
     */
    on(event: string, priority?: number, callback: Function, target: any): any;
    /**
     * De-register an event listener
     *
     * @param {string} event
     * @param {Function} callback
     */
    off(event: string, callback: Function): void;
    attachTo(parentNode: any): void;
    getDefinitions(): any;
    detach(): void;
    _init(container: any, moddle: any, options: any): void;
    /**
     * Emit an event on the underlying {@link EventBus}
     *
     * @param  {string} type
     * @param  {Object} event
     *
     * @return {Object} event processing result (if any)
     */
    _emit(type: string, event: any): any;
    _createContainer(options: any): any;
    _createModdle(options: any): any;
    _interactionModules: any[];
    _modelingModules: any[];
    _modules: any[];
}
declare namespace Modeler {
    export { Viewer };
    export { NavigatedViewer };
}
export default Modeler;
/**
 * The createDiagram result.
 */
export type CreateDiagramResult = {
    warnings: Array<string>;
};
/**
 * The createDiagram error.
 */
export type CreateDiagramError = Error;
import Viewer from "./Viewer";
import NavigatedViewer from "./NavigatedViewer";
