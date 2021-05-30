/**
 * Correct hover targets in certain situations to improve diagram interaction.
 *
 * @param {ElementRegistry} elementRegistry
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
declare function FixHoverBehavior(elementRegistry: any, eventBus: any, canvas: any): void;
declare namespace FixHoverBehavior {
    const $inject: string[];
}
export default FixHoverBehavior;
