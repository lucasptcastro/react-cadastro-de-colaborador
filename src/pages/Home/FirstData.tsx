import React from "react";
import { Col, Divider, Form, Input, Row, Typography } from "antd";

const onFinish = (values: any) => {};

const onFinishFailed = (errorInfo: any) => {};

const FirstData: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        name="frmCompany"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="left"
        layout="vertical"
      >
        <Divider orientation="left" plain orientationMargin="0">
          <Typography.Title level={3}>Dados da Empresa</Typography.Title>
        </Divider>

        <Row
          className="flex flex-row items-center justify-start p-2"
          gutter={16}
        >
          <Col span={12}>
            <Form.Item
              label="Empresa:"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Por favor, informe o nome da empresa!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="CNPJ:"
              name="companyCnpj"
              rules={[
                {
                  required: true,
                  message: "Por favor, informe o CNPJ da empresa!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FirstData;
