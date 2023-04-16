import React from "react";
import { Card, RadioChangeEvent } from "antd";
import { Row, Col, Input, Form, Upload } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import Table, { ColumnsType } from "antd/lib/table";

const Documentation: React.FC = (props) => {
  const [valueDeficiency, setValueDeficiency] = React.useState(false);
  const [valueMaritalStatus, setValueMaritalStatus] = React.useState();
  const [valueHaveSons, setValueHaveSons] = React.useState();
  const [valueDependentIncomeTax, setValueDependentIncomeTax] =
    React.useState();
  const [form] = Form.useForm();
  const onChangeDeficiency = (e: CheckboxChangeEvent) => {
    setValueDeficiency(e.target.checked);
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
          <Upload />
        </div>
      ),
      width: 200,
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      document: "Carteira de trabalho - CTPS",
    },
    {
      key: "2",
      document: "CTPS digital",
    },
    {
      key: "3",
      document: "Identidade e CPF",
    },
    {
      key: "4",
      document: "PIS",
    },
    {
      key: "5",
      document: "Título de eleitor",
    },
    {
      key: "6",
      document: "Certificado de reservista",
    },
    {
      key: "7",
      document: "Carteira de CRC (caso possua)",
    },
    {
      key: "8",
      document: "Carta de referência",
    },
  ];

  return (
    <Form
      form={form}
      name="frmDocumentation"
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
            label="CPF:"
            name="cpf"
            rules={[
              {
                required: true,
                message: "Por favor, informe o CPF!",
              },
            ]}
          >
            <Input placeholder="Apenas número" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="RG:"
            name="rg"
            rules={[
              {
                required: true,
                message: "Por favor, informe o RG!",
              },
            ]}
          >
            <Input placeholder="Apenas número" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Órgão emissor:"
            name="issuingBody"
            rules={[
              {
                required: true,
                message: "Por favor, informe o órgão emissor!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item
            label="UF:"
            name="uf"
            rules={[
              {
                required: true,
                message: "Por favor, informe a UF!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={24}>
          <Card
            className="drop-shadow-lg"
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

export default Documentation;
