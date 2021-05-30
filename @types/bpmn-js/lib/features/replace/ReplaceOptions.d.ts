export var START_EVENT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
    };
})[];
export var START_EVENT_SUB_PROCESS: {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
    };
}[];
export var INTERMEDIATE_EVENT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType?: undefined;
        eventDefinitionAttrs?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        eventDefinitionAttrs?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        eventDefinitionAttrs: {
            name: string;
        };
    };
})[];
export var END_EVENT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
    };
})[];
export var GATEWAY: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        instantiate?: undefined;
        eventGatewayType?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        instantiate: boolean;
        eventGatewayType: string;
    };
})[];
export var SUBPROCESS_EXPANDED: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
        triggeredByEvent?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        triggeredByEvent: boolean;
        isExpanded: boolean;
    };
})[];
export var TRANSACTION: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
        triggeredByEvent?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        triggeredByEvent: boolean;
        isExpanded: boolean;
    };
})[];
export var EVENT_SUB_PROCESS: {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
    };
}[];
export var TASK: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
    };
})[];
export var DATA_OBJECT_REFERENCE: {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
    };
}[];
export var DATA_STORE_REFERENCE: {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
    };
}[];
export var BOUNDARY_EVENT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        cancelActivity?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        cancelActivity: boolean;
    };
})[];
export var EVENT_SUB_PROCESS_START_EVENT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        isInterrupting?: undefined;
    };
} | {
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        eventDefinitionType: string;
        isInterrupting: boolean;
    };
})[];
export var SEQUENCE_FLOW: {
    label: string;
    actionName: string;
    className: string;
}[];
export var PARTICIPANT: ({
    label: string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
    };
} | {
    label: (element: any) => string;
    actionName: string;
    className: string;
    target: {
        type: string;
        isExpanded: boolean;
    };
})[];
