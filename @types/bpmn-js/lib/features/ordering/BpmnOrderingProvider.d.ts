/**
 * a simple ordering provider that makes sure:
 *
 * (0) labels and groups are rendered always on top
 * (1) elements are ordered by a {level} property
 */
declare function BpmnOrderingProvider(eventBus: any, canvas: any, translate: any): void;
declare class BpmnOrderingProvider {
    /**
     * a simple ordering provider that makes sure:
     *
     * (0) labels and groups are rendered always on top
     * (1) elements are ordered by a {level} property
     */
    constructor(eventBus: any, canvas: any, translate: any);
    getOrdering: (element: any, newParent: any) => {
        index: any;
        parent: any;
    };
}
declare namespace BpmnOrderingProvider {
    const $inject: string[];
}
export default BpmnOrderingProvider;
