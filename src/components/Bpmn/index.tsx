import React, { useRef, useEffect, useState, useCallback } from 'react';

import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import BpmnModeler from 'bpmn-js/lib/Modeler';

import { Container, BpmnContainer, PropertiesContainer } from './styles';

interface BpmnProps {
  source?: string;
}

const Bpmn: React.FC<BpmnProps> = ({ source }) => {
  const bpmnRef = useRef<HTMLDivElement>(null);
  const [modeler, setModeler] = useState<BpmnModeler | null>(null);

  const openBpmn = useCallback(
    (bpmnSource: string) => {
      async function importBpmn() {
        if (!modeler) return;
        await modeler.importXML(bpmnSource);
      }

      importBpmn();
    },
    [modeler],
  );

  useEffect(() => {
    setModeler(
      new BpmnModeler({
        container: bpmnRef?.current,
        propertiesPanel: {
          parent: '#js-properties-panel',
        },
        additionalModules: [propertiesPanelModule, propertiesProviderModule],
      }),
    );
  }, [bpmnRef]);

  useEffect(() => {
    if (source) {
      openBpmn(source);
    }
  }, [openBpmn, source]);

  return (
    <Container>
      <BpmnContainer ref={bpmnRef} />
      <PropertiesContainer id="js-properties-panel" />
    </Container>
  );
};

export default Bpmn;
