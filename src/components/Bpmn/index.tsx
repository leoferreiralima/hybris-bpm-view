import React, { useRef, useEffect, useState, useCallback } from 'react';

import BpmnModeler from 'bpmn-js/lib/Modeler';

import { Container } from './styles';

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
        try {
          await modeler.importXML(bpmnSource);
        } catch (err) {
          console.error(err);
        }
      }

      importBpmn();
    },
    [modeler],
  );

  useEffect(() => {
    setModeler(
      new BpmnModeler({
        container: bpmnRef?.current,
      }),
    );
    if (source) {
      openBpmn(source);
    }
  }, [bpmnRef, openBpmn, source]);

  return <Container ref={bpmnRef} />;
};

export default Bpmn;
