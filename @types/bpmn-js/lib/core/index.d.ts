declare namespace _default {
    const __depends__: ({
        __init__: string[];
        bpmnRenderer: (string | typeof import("../draw/BpmnRenderer").default)[];
        textRenderer: (string | typeof import("../draw/TextRenderer").default)[];
        pathMap: (string | typeof import("../draw/PathMap").default)[];
    } | {
        __depends__: any[];
        bpmnImporter: (string | typeof import("../import/BpmnImporter").default)[];
    })[];
}
export default _default;
