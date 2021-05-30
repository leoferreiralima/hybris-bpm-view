export default function BpmnTreeWalker(handler: any, translate: any): {
    handleDeferred: () => void;
    handleDefinitions: (definitions: any, diagram?: any) => void;
    handleSubProcess: (subProcess: any, context: any) => void;
    registerDi: (di: any) => void;
};
