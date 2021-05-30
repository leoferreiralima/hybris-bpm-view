/**
 * This module is an element agnostic replace menu provider for the popup menu.
 */
declare function ReplaceMenuProvider(bpmnFactory: any, popupMenu: any, modeling: any, moddle: any, bpmnReplace: any, rules: any, translate: any): void;
declare class ReplaceMenuProvider {
    /**
     * This module is an element agnostic replace menu provider for the popup menu.
     */
    constructor(bpmnFactory: any, popupMenu: any, modeling: any, moddle: any, bpmnReplace: any, rules: any, translate: any);
    _bpmnFactory: any;
    _popupMenu: any;
    _modeling: any;
    _moddle: any;
    _bpmnReplace: any;
    _rules: any;
    _translate: any;
    /**
     * Register replace menu provider in the popup menu
     */
    register(): void;
    /**
     * Get all entries from replaceOptions for the given element and apply filters
     * on them. Get for example only elements, which are different from the current one.
     *
     * @param {djs.model.Base} element
     *
     * @return {Array<Object>} a list of menu entry items
     */
    getEntries(element: any): Array<any>;
    /**
     * Get a list of header items for the given element. This includes buttons
     * for multi instance markers and for the ad hoc marker.
     *
     * @param {djs.model.Base} element
     *
     * @return {Array<Object>} a list of menu entry items
     */
    getHeaderEntries(element: any): Array<any>;
    /**
     * Creates an array of menu entry objects for a given element and filters the replaceOptions
     * according to a filter function.
     *
     * @param  {djs.model.Base} element
     * @param  {Object} replaceOptions
     *
     * @return {Array<Object>} a list of menu items
     */
    _createEntries(element: any, replaceOptions: any): Array<any>;
    /**
     * Creates an array of menu entry objects for a given sequence flow.
     *
     * @param  {djs.model.Base} element
     * @param  {Object} replaceOptions
    
     * @return {Array<Object>} a list of menu items
     */
    _createSequenceFlowEntries(element: any, replaceOptions: any): Array<any>;
    /**
     * Creates and returns a single menu entry item.
     *
     * @param  {Object} definition a single replace options definition object
     * @param  {djs.model.Base} element
     * @param  {Function} [action] an action callback function which gets called when
     *                             the menu entry is being triggered.
     *
     * @return {Object} menu entry item
     */
    _createMenuEntry(definition: any, element: any, action?: Function): any;
    /**
     * Get a list of menu items containing buttons for multi instance markers
     *
     * @param  {djs.model.Base} element
     *
     * @return {Array<Object>} a list of menu items
     */
    _getLoopEntries(element: any): Array<any>;
    /**
     * Get a list of menu items containing a button for the collection marker
     *
     * @param  {djs.model.Base} element
     *
     * @return {Array<Object>} a list of menu items
     */
    _getDataObjectIsCollection(element: any): Array<any>;
    /**
     * Get a list of menu items containing a button for the participant multiplicity marker
     *
     * @param  {djs.model.Base} element
     *
     * @return {Array<Object>} a list of menu items
     */
    _getParticipantMultiplicity(element: any): Array<any>;
    /**
     * Get the menu items containing a button for the ad hoc marker
     *
     * @param  {djs.model.Base} element
     *
     * @return {Object} a menu item
     */
    _getAdHocEntry(element: any): any;
}
declare namespace ReplaceMenuProvider {
    const $inject: string[];
}
export default ReplaceMenuProvider;
