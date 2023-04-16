import React from "react";
import { Col, Form, Input, Row } from "antd";

const onFinish = (values: any) => {};

const onFinishFailed = (errorInfo: any) => {};

const Geral: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="frmGeral"
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
        <Col span={6}>
          <Form.Item
            label="Matrícula:"
            name="registration"
            rules={[
              {
                required: true,
                message: "Por favor, informe a matrícula!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Cargo:"
            name="post"
            rules={[
              {
                required: true,
                message: "Por favor, informe o cargo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Salário:"
            name="wage"
            rules={[
              {
                required: true,
                message: "Por favor, informe o salário!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Data:"
            name="admissionDate"
            rules={[
              {
                required: true,
                message: "Por favor, informe a data de admissão!",
              },
            ]}
          >
            <Input type={"date"} />
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={6}>
          <Form.Item
            label="Departamento:"
            name="department"
            rules={[
              {
                required: true,
                message: "Por favor, informe o departamento!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Serviço:"
            name="service"
            rules={[
              {
                required: true,
                message: "Por favor, informe o serviço!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Centro de custo:"
            name="costCenter"
            rules={[
              {
                required: true,
                message: "Por favor, informe o centro de custo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Sindicato:"
            name="syndicate"
            rules={[
              {
                required: true,
                message: "Por favor, informe o sindicato!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Geral;
