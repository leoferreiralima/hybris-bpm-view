/**
 * Unclaims model IDs on element deletion.
 *
 * @param {Canvas} canvas
 * @param {Injector} injector
 * @param {Moddle} moddle
 * @param {Modeling} modeling
 */
declare function UnclaimIdBehavior(canvas: any, injector: any, moddle: any, modeling: any): void;
declare namespace UnclaimIdBehavior {
    const $inject: string[];
}
export default UnclaimIdBehavior;
