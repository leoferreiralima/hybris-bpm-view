declare namespace _default {
    const __init__: string[];
    const __depends__: any[];
    const bpmnFactory: (string | typeof BpmnFactory)[];
    const bpmnUpdater: (string | typeof BpmnUpdater)[];
    const elementFactory: (string | typeof ElementFactory)[];
    const modeling: (string | typeof Modeling)[];
    const layouter: (string | typeof BpmnLayouter)[];
    const connectionDocking: any[];
}
export default _default;
import BpmnFactory from "./BpmnFactory";
import BpmnUpdater from "./BpmnUpdater";
import ElementFactory from "./ElementFactory";
import Modeling from "./Modeling";
import BpmnLayouter from "./BpmnLayouter";
