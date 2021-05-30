declare function SetColorHandler(commandStack: any): void;
declare class SetColorHandler {
    constructor(commandStack: any);
    _commandStack: any;
    _normalizeColor: (color: any) => string;
    postExecute(context: any): void;
}
declare namespace SetColorHandler {
    const $inject: string[];
}
export default SetColorHandler;
