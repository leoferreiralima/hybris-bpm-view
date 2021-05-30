/**
 * The importBpmnDiagram result.
 *
 * @typedef {Object} ImportBPMNDiagramResult
 *
 * @property {Array<string>} warnings
 */
/**
* The importBpmnDiagram error.
*
* @typedef {Error} ImportBPMNDiagramError
*
* @property {Array<string>} warnings
*/
/**
 * Import the definitions into a diagram.
 *
 * Errors and warnings are reported through the specified callback.
 *
 * @param  {djs.Diagram} diagram
 * @param  {ModdleElement<Definitions>} definitions
 * @param  {ModdleElement<BPMNDiagram>} [bpmnDiagram] the diagram to be rendered
 * (if not provided, the first one will be rendered)
 *
 * Returns {Promise<ImportBPMNDiagramResult, ImportBPMNDiagramError>}
 */
export function importBpmnDiagram(diagram: any, definitions: any, bpmnDiagram?: any): any;
/**
 * The importBpmnDiagram result.
 */
export type ImportBPMNDiagramResult = {
    warnings: Array<string>;
};
/**
 * The importBpmnDiagram error.
 */
export type ImportBPMNDiagramError = Error;
