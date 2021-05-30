/**
 * A base modeler for BPMN 2.0 diagrams.
 *
 * Have a look at {@link Modeler} for a bundle that includes actual features.
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {string|number} [options.width] the width of the viewer
 * @param {string|number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

import BaseViewer from './BaseViewer'
export default function BaseModeler(options?: {
    container?: any;
    width?: string | number;
    height?: string | number;
    moddleExtensions?: any;
    modules?: Array<any>;
    additionalModules?: Array<any>;
}): void;
export default class BaseModeler extends BaseViewer {
    /**
     * A base modeler for BPMN 2.0 diagrams.
     *
     * Have a look at {@link Modeler} for a bundle that includes actual features.
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
}
