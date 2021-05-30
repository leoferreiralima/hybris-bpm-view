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
declare function Modeler(options?: {
    container?: any;
    width?: string | number;
    height?: string | number;
    moddleExtensions?: any;
    modules?: Array<any>;
    additionalModules?: Array<any>;
}): void;
declare class Modeler {
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
