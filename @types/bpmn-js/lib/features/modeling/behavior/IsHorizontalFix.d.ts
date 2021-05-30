/**
 * A component that makes sure that each created or updated
 * Pool and Lane is assigned an isHorizontal property set to true.
 *
 * @param {EventBus} eventBus
 */
declare function IsHorizontalFix(eventBus: any): void;
declare namespace IsHorizontalFix {
    const $inject: string[];
}
export default IsHorizontalFix;
