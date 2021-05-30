import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const BpmnContainer = styled.div`
  width: 100%;
`;

export const PropertiesContainer = styled.div`
  border-left: 1px solid #ccc;
  overflow: auto;
  &:empty {
    display: none;
  }
  > .djs-properties-panel {
    padding-bottom: 70px;
    min-height: 100%;
  }
`;
