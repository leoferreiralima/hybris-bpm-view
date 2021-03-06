export default `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1gwfgqp" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="8.6.0">
  <bpmn:process id="Process_14nmo07" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1jpbr93">
      <bpmn:outgoing>Flow_0hkysl8</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0hkysl8" sourceRef="StartEvent_1jpbr93" targetRef="Activity_1u2qi93" />
    <bpmn:exclusiveGateway id="Gateway_1km7o2w" name="Decisão">
      <bpmn:incoming>Flow_0d84rxe</bpmn:incoming>
      <bpmn:outgoing>Flow_06lorwd</bpmn:outgoing>
      <bpmn:outgoing>Flow_09gc7ss</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0d84rxe" sourceRef="Activity_1u2qi93" targetRef="Gateway_1km7o2w" />
    <bpmn:sequenceFlow id="Flow_06lorwd" name="Sim" sourceRef="Gateway_1km7o2w" targetRef="Activity_0ez1e6l" />
    <bpmn:serviceTask id="Activity_1u2qi93" name="User Task">
      <bpmn:incoming>Flow_0hkysl8</bpmn:incoming>
      <bpmn:outgoing>Flow_0d84rxe</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_09gc7ss" name="Nâo" sourceRef="Gateway_1km7o2w" targetRef="Activity_13ihnro" />
    <bpmn:serviceTask id="Activity_0ez1e6l" name="Task Sim">
      <bpmn:incoming>Flow_06lorwd</bpmn:incoming>
      <bpmn:outgoing>Flow_12bdbqc</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_13ihnro" name="Task Não">
      <bpmn:incoming>Flow_09gc7ss</bpmn:incoming>
      <bpmn:outgoing>Flow_0we82hr</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:intermediateCatchEvent id="Event_1rk23e2" name="Wait Event">
      <bpmn:incoming>Flow_12bdbqc</bpmn:incoming>
      <bpmn:incoming>Flow_0we82hr</bpmn:incoming>
      <bpmn:outgoing>Flow_19fykry</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_19ndr6a" />
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="Flow_12bdbqc" sourceRef="Activity_0ez1e6l" targetRef="Event_1rk23e2" />
    <bpmn:sequenceFlow id="Flow_0we82hr" sourceRef="Activity_13ihnro" targetRef="Event_1rk23e2" />
    <bpmn:task id="Activity_06y8lnx" name="AfterEvent">
      <bpmn:incoming>Flow_19fykry</bpmn:incoming>
      <bpmn:outgoing>Flow_11doo72</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_19fykry" sourceRef="Event_1rk23e2" targetRef="Activity_06y8lnx" />
    <bpmn:sequenceFlow id="Flow_11doo72" sourceRef="Activity_06y8lnx" targetRef="Activity_0ezqo46" />
    <bpmn:subProcess id="Activity_0ezqo46" name="Sub Proccess">
      <bpmn:incoming>Flow_11doo72</bpmn:incoming>
      <bpmn:outgoing>Flow_1is201j</bpmn:outgoing>
    </bpmn:subProcess>
    <bpmn:endEvent id="Event_1kqa3rj">
      <bpmn:incoming>Flow_1is201j</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1is201j" sourceRef="Activity_0ezqo46" targetRef="Event_1kqa3rj" />
    <bpmn:textAnnotation id="TextAnnotation_1cdving">
      <bpmn:text>Anotação</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_1dos0fx" sourceRef="Activity_0ez1e6l" targetRef="TextAnnotation_1cdving" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_14nmo07">
      <bpmndi:BPMNShape id="TextAnnotation_1cdving_di" bpmnElement="TextAnnotation_1cdving">
        <dc:Bounds x="730" y="80" width="100" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0hkysl8_di" bpmnElement="Flow_0hkysl8">
        <di:waypoint x="192" y="209" />
        <di:waypoint x="250" y="209" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0d84rxe_di" bpmnElement="Flow_0d84rxe">
        <di:waypoint x="350" y="209" />
        <di:waypoint x="455" y="209" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06lorwd_di" bpmnElement="Flow_06lorwd">
        <di:waypoint x="505" y="209" />
        <di:waypoint x="630" y="209" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="558" y="191" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_09gc7ss_di" bpmnElement="Flow_09gc7ss">
        <di:waypoint x="480" y="234" />
        <di:waypoint x="480" y="320" />
        <di:waypoint x="630" y="320" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="485" y="274" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12bdbqc_di" bpmnElement="Flow_12bdbqc">
        <di:waypoint x="730" y="209" />
        <di:waypoint x="806" y="209" />
        <di:waypoint x="806" y="260" />
        <di:waypoint x="882" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0we82hr_di" bpmnElement="Flow_0we82hr">
        <di:waypoint x="730" y="320" />
        <di:waypoint x="806" y="320" />
        <di:waypoint x="806" y="260" />
        <di:waypoint x="882" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19fykry_di" bpmnElement="Flow_19fykry">
        <di:waypoint x="918" y="260" />
        <di:waypoint x="1070" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11doo72_di" bpmnElement="Flow_11doo72">
        <di:waypoint x="1170" y="260" />
        <di:waypoint x="1280" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1is201j_di" bpmnElement="Flow_1is201j">
        <di:waypoint x="1380" y="260" />
        <di:waypoint x="1492" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1jpbr93">
        <dc:Bounds x="156" y="191" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0xpubff_di" bpmnElement="Activity_1u2qi93">
        <dc:Bounds x="250" y="169" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1km7o2w_di" bpmnElement="Gateway_1km7o2w" isMarkerVisible="true">
        <dc:Bounds x="455" y="184" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="460" y="154" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0wjjcdp_di" bpmnElement="Activity_13ihnro">
        <dc:Bounds x="630" y="280" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0dsi29p_di" bpmnElement="Activity_0ez1e6l">
        <dc:Bounds x="630" y="169" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1u2h9xw_di" bpmnElement="Event_1rk23e2">
        <dc:Bounds x="882" y="242" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="874" y="285" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_06y8lnx_di" bpmnElement="Activity_06y8lnx">
        <dc:Bounds x="1070" y="220" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1kqa3rj_di" bpmnElement="Event_1kqa3rj">
        <dc:Bounds x="1492" y="242" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_1dos0fx_di" bpmnElement="Association_1dos0fx">
        <di:waypoint x="715" y="169" />
        <di:waypoint x="767" y="110" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_0lg8dnf_di" bpmnElement="Activity_0ezqo46">
        <dc:Bounds x="1280" y="220" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
