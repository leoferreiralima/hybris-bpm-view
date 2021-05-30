/**
 * Invoke {@link Modeling#resizeLane} instead of
 * {@link Modeling#resizeShape} when resizing a Lane
 * or Participant shape.
 */
declare function ResizeLaneBehavior(eventBus: any, modeling: any): void;
declare namespace ResizeLaneBehavior {
    const $inject: string[];
}
export default ResizeLaneBehavior;
