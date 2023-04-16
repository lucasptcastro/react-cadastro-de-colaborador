import React from "react";
import {
  Card,
  RadioChangeEvent,
  Table,
  Space,
  Row,
  Col,
  Input,
  Form,
  Radio,
  Checkbox,
  Modal,
  message,
  Button,
  Upload,
} from "antd";

import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { ColumnsType } from "antd/lib/table";

import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const PersonalInformations: React.FC = () => {
  const [valueDeficiency, setValueDeficiency] = React.useState(false);
  const [valueSchooling, setValueSchooling] = React.useState();
  const [valueMaritalStatus, setValueMaritalStatus] = React.useState();
  const [valueHaveSons, setValueHaveSons] = React.useState();
  const [valueDependentIncomeTax, setValueDependentIncomeTax] =
    React.useState();
  const [form] = Form.useForm();
  const [isSchoolingDocument, setIsSchoolingDocument] = React.useState(false);

  const onChangeDeficiency = (e: CheckboxChangeEvent) => {
    setValueDeficiency(e.target.checked);
  };

  const onChangeValueSchooling = (e: RadioChangeEvent) => {
    setValueSchooling(e.target.value);
  };

  const onChangeMaritalStatus = (e: RadioChangeEvent) => {
    setValueMaritalStatus(e.target.value);
  };

  const onChangeHaveSons = (e: RadioChangeEvent) => {
    setValueHaveSons(e.target.value);
  };

  const onChangeDependentIncomeTax = (e: RadioChangeEvent) => {
    setValueDependentIncomeTax(e.target.value);
  };

  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};

  interface DataType {
    key: string;
    document: string;
  }

  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPDF = file.type === "pdf";
      if (!isPDF) {
        message.error(`${file.name} não é um arquivo .pdf`);
      }
      return isPDF || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <p className="flex flex-row justify-center">DOCUMENTOS NECESSÁRIOS</p>
      ),
      dataIndex: "document",
      key: "document",
      width: 200,
    },
    {
      title: <p className="flex flex-row justify-center">UPLOAD DE ARQUIVOS</p>,
      key: "fileUpload",
      render: (_, record) => (
        <div className="flex flex-row justify-center">
          <Upload {...props}>
            <Button>Carregar arquivo</Button>
          </Upload>
        </div>
      ),
      width: 200,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      document: "Uma foto 3x4",
    },
    {
      key: "2",
      document: "Comprovante de escolaridade",
    },
    {
      key: "3",
      document: "Certidão de nascimento ou casamento",
    },
  ];

  return (
    <Form
      form={form}
      name="frmPersonalInformations"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelAlign="left"
      layout="vertical"
    >
      <br />
      <br />
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Nome completo:"
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor, informe o nome completo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Nome no crachá:"
            name="badgeName"
            rules={[
              {
                required: true,
                message: "Por favor, informe o nome no crachá!",
              },
            ]}
          >
            <Input placeholder="Nome e sobrenome" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="E-mail:"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor, informe o e-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        className="flex flex-row items-center justify-start p-2"
        gutter={[16, 8]}
      >
        <Col span={8}>
          <Form.Item
            label="Celular:"
            name="cellphone"
            rules={[
              {
                required: true,
                message: "Por favor, informe o número de celular!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Data de nascimento:"
            name="birthDate"
            rules={[
              {
                required: true,
                message: "Por favor, informe a data de nascimento!",
              },
            ]}
          >
            <Input type={"date"} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Gênero:"
            name="genre"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o gênero!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="masculine"> Masculino </Radio>
              <Radio value="feminine"> Feminino </Radio>
              <Radio value="undefined">Prefiro não informar</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={8}>
          <Form.Item label="Nome do pai:" name="fatherName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Nome da mãe:" name="motherName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Seu tamanho de camisa:"
            name="shirtSize"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o tamanho da camisa!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="pSize"> PP </Radio>
              <Radio value="ppSize"> P </Radio>
              <Radio value="mSize">M</Radio>
              <Radio value="gSize">G</Radio>
              <Radio value="ggSize">GG</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row p-2" gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Possui alguma necessidade especial?"
            name="deficiency"
          >
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="physical"> Física </Checkbox>
                <Checkbox value="visual"> Visual </Checkbox>
                <Checkbox value="auditory"> Auditiva </Checkbox>
                <Checkbox value="mental"> Mental </Checkbox>
                <Checkbox value="intellectual">Intelectual</Checkbox>
                <Checkbox value="rehabilitated">Reabilitado</Checkbox>
                <Checkbox
                  value="otherDeficiency"
                  checked={valueDeficiency}
                  onChange={onChangeDeficiency}
                >
                  Outra:
                </Checkbox>
              </Space>
            </Checkbox.Group>
            <Input
              style={{
                opacity: valueDeficiency === true ? 1 : 0,
                marginTop: "0.5rem",
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Grau de escolaridade:"
            name="schooling"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o grau de escolaridade!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeValueSchooling}>
              <Space direction="vertical">
                <Radio value="highSchoolInComplete">Médio Incompleto</Radio>
                <Radio value="highSchoolComplete">Médio Completo</Radio>
                <Radio value="universityIncomplete">Superior Incompleto</Radio>
                <Radio value="universityComplete">Superior Completo</Radio>
                <Radio value="postgraduateIncomplete">
                  Pós-Graduação Incompleta
                </Radio>
                <Radio value="postgraduateComplete">
                  Pós-Graduação Completa
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Estado Civil:"
            name="maritalStatus"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o estado civil!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeMaritalStatus}>
              <Space direction="vertical">
                <Radio value={"married"}> Casado(a) </Radio>
                <Radio value={"divorced"}>Divorciado(a)</Radio>
                <Radio value={"single"}> Solteiro(a) </Radio>
                <Radio value={"stableUnion"}>União Estável</Radio>
                <Radio value={"otherMaritalStatus"}>Outra:</Radio>
              </Space>
            </Radio.Group>
            <Input
              style={{
                opacity: valueMaritalStatus === "otherMaritalStatus" ? 1 : 0,
                marginTop: "0.5rem",
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row p-2" gutter={16}>
        <Col span={8}>
          <Form.Item label="Nome do cônjugue:" name="spouseName">
            <Input placeholder="Caso possua cônjugue, informe o nome completo" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="CPF do cônjugue:" name="spouseCpf">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Instagram:" name="instagram">
            <Input prefix="@" />
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row p-2" gutter={16}>
        <Col span={16}>
          <Form.Item
            label="Fale um pouco sobre você:"
            name="aboutYou"
            rules={[
              {
                required: true,
                message: "Por favor, fale um pouco sobre você!",
              },
            ]}
          >
            <Input.TextArea
              rows={6}
              style={{
                borderRadius: "5px",
                marginTop: "0.5rem",
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card
            className="shadow-xl"
            style={{
              borderRadius: "10px",
            }}
          >
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalInformations;
