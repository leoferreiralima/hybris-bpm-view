/**
 * @typedef {Function} <moddleCopy.canCopyProperties> listener
 *
 * @param {Object} context
 * @param {Array<string>} context.propertyNames
 * @param {ModdleElement} context.sourceElement
 * @param {ModdleElement} context.targetElement
 *
 * @returns {Array<string>|boolean} - Return properties to be copied or false to disallow
 * copying.
 */
/**
 * @typedef {Function} <moddleCopy.canCopyProperty> listener
 *
 * @param {Object} context
 * @param {ModdleElement} context.parent
 * @param {*} context.property
 * @param {string} context.propertyName
 *
 * @returns {*|boolean} - Return copied property or false to disallow
 * copying.
 */
/**
 * @typedef {Function} <moddleCopy.canSetCopiedProperty> listener
 *
 * @param {Object} context
 * @param {ModdleElement} context.parent
 * @param {*} context.property
 * @param {string} context.propertyName
 *
 * @returns {boolean} - Return false to disallow
 * setting copied property.
 */
/**
 * Utility for copying model properties from source element to target element.
 *
 * @param {EventBus} eventBus
 * @param {BpmnFactory} bpmnFactory
 * @param {BpmnModdle} moddle
 */
declare function ModdleCopy(eventBus: any, bpmnFactory: any, moddle: any): void;
declare class ModdleCopy {
    /**
     * @typedef {Function} <moddleCopy.canCopyProperties> listener
     *
     * @param {Object} context
     * @param {Array<string>} context.propertyNames
     * @param {ModdleElement} context.sourceElement
     * @param {ModdleElement} context.targetElement
     *
     * @returns {Array<string>|boolean} - Return properties to be copied or false to disallow
     * copying.
     */
    /**
     * @typedef {Function} <moddleCopy.canCopyProperty> listener
     *
     * @param {Object} context
     * @param {ModdleElement} context.parent
     * @param {*} context.property
     * @param {string} context.propertyName
     *
     * @returns {*|boolean} - Return copied property or false to disallow
     * copying.
     */
    /**
     * @typedef {Function} <moddleCopy.canSetCopiedProperty> listener
     *
     * @param {Object} context
     * @param {ModdleElement} context.parent
     * @param {*} context.property
     * @param {string} context.propertyName
     *
     * @returns {boolean} - Return false to disallow
     * setting copied property.
     */
    /**
     * Utility for copying model properties from source element to target element.
     *
     * @param {EventBus} eventBus
     * @param {BpmnFactory} bpmnFactory
     * @param {BpmnModdle} moddle
     */
    constructor(eventBus: any, bpmnFactory: any, moddle: any);
    _bpmnFactory: any;
    _eventBus: any;
    _moddle: any;
    /**
     * Copy model properties of source element to target element.
     *
     * @param {ModdleElement} sourceElement
     * @param {ModdleElement} targetElement
     * @param {Array<string>} [propertyNames]
     *
     * @param {ModdleElement}
     */
    copyElement(sourceElement: any, targetElement: any, propertyNames?: Array<string>): any;
    /**
     * Copy model property.
     *
     * @param {*} property
     * @param {ModdleElement} parent
     * @param {string} propertyName
     *
     * @returns {*}
     */
    copyProperty(property: any, parent: any, propertyName: string): any;
}
declare namespace ModdleCopy {
    const $inject: string[];
}
export default ModdleCopy;
export function getPropertyNames(descriptor: any, keepDefaultProperties: any): any;
/**
 * <moddleCopy.canCopyProperties> listener
 */
export type ModdleCopy = Function;
