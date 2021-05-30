/**
 * Set minimum bounds/resize constraints on resize.
 *
 * @param {EventBus} eventBus
 */
declare function ResizeBehavior(eventBus: any): void;
declare namespace ResizeBehavior {
    const $inject: string[];
}
export default ResizeBehavior;
export namespace LANE_MIN_DIMENSIONS {
    const width: number;
    const height: number;
}
export namespace PARTICIPANT_MIN_DIMENSIONS {
    const width_1: number;
    export { width_1 as width };
    const height_1: number;
    export { height_1 as height };
}
export namespace SUB_PROCESS_MIN_DIMENSIONS {
    const width_2: number;
    export { width_2 as width };
    const height_2: number;
    export { height_2 as height };
}
export namespace TEXT_ANNOTATION_MIN_DIMENSIONS {
    const width_3: number;
    export { width_3 as width };
    const height_3: number;
    export { height_3 as height };
}
