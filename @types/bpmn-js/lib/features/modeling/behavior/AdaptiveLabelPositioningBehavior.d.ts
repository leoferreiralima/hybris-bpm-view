/**
 * A component that makes sure that external labels are added
 * together with respective elements and properly updated (DI wise)
 * during move.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */
declare function AdaptiveLabelPositioningBehavior(eventBus: any, modeling: any): void;
declare namespace AdaptiveLabelPositioningBehavior {
    const $inject: string[];
}
export default AdaptiveLabelPositioningBehavior;
