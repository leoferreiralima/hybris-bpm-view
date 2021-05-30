declare function TextRenderer(config: any): void;
declare class TextRenderer {
    constructor(config: any);
    /**
     * Get the new bounds of an externally rendered,
     * layouted label.
     *
     * @param  {Bounds} bounds
     * @param  {string} text
     *
     * @return {Bounds}
     */
    getExternalLabelBounds: (bounds: any, text: string) => any;
    /**
     * Get the new bounds of text annotation.
     *
     * @param  {Bounds} bounds
     * @param  {string} text
     *
     * @return {Bounds}
     */
    getTextAnnotationBounds: (bounds: any, text: string) => any;
    /**
     * Create a layouted text element.
     *
     * @param {string} text
     * @param {Object} [options]
     *
     * @return {SVGElement} rendered text
     */
    createText: (text: string, options?: any) => SVGElement;
    /**
     * Get default text style.
     */
    getDefaultStyle: () => any;
    /**
     * Get the external text style.
     */
    getExternalStyle: () => any;
}
declare namespace TextRenderer {
    const $inject: string[];
}
export default TextRenderer;
