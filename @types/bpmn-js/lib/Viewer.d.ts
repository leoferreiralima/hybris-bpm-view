/**
 * A viewer for BPMN 2.0 diagrams.
 *
 * Have a look at {@link NavigatedViewer} or {@link Modeler} for bundles that include
 * additional features.
 *
 *
 * ## Extending the Viewer
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
 * var bpmnViewer = new Viewer({ additionalModules: [ extensionModule ] });
 * bpmnViewer.importXML(...);
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
export default function Viewer(options?: {
    container?: any;
    width?: string | number;
    height?: string | number;
    moddleExtensions?: any;
    modules?: Array<any>;
    additionalModules?: Array<any>;
}): void;
export default class Viewer {
    /**
     * A viewer for BPMN 2.0 diagrams.
     *
     * Have a look at {@link NavigatedViewer} or {@link Modeler} for bundles that include
     * additional features.
     *
     *
     * ## Extending the Viewer
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
     * var bpmnViewer = new Viewer({ additionalModules: [ extensionModule ] });
     * bpmnViewer.importXML(...);
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
    _modules: any[];
    _moddleExtensions: {};
}
