/**
 * Provides ability to search through BPMN elements
 */
declare function BpmnSearchProvider(elementRegistry: any, searchPad: any, canvas: any): void;
declare class BpmnSearchProvider {
    /**
     * Provides ability to search through BPMN elements
     */
    constructor(elementRegistry: any, searchPad: any, canvas: any);
    _elementRegistry: any;
    _canvas: any;
    /**
     * Finds all elements that match given pattern
     *
     * <Result> :
     *  {
     *    primaryTokens: <Array<Token>>,
     *    secondaryTokens: <Array<Token>>,
     *    element: <Element>
     *  }
     *
     * <Token> :
     *  {
     *    normal|matched: <string>
     *  }
     *
     * @param  {string} pattern
     * @return {Array<Result>}
     */
    find(pattern: string): Array<any>;
}
declare namespace BpmnSearchProvider {
    const $inject: string[];
}
export default BpmnSearchProvider;
