import React from "react";
import { Typography, Form, Radio, Input, Col, Row, Divider } from "antd";

const onFinish = (values: any) => {};

const onFinishFailed = (errorInfo: any) => {};

const Banking: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="frmBanking"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelAlign="left"
    >
      <Divider orientation="left" plain orientationMargin="0">
        <Typography.Title level={3}>Dados Financeiros</Typography.Title>
      </Divider>
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Pagou contribuição sindical este ano:"
            name="unionDues"
          >
            <Radio.Group>
              <Radio value="yesUnionDues"> Sim </Radio>
              <Radio value="noUnionDues"> Não </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Optante pelo desconto da contribuição sindical:"
            name="unionDuesDiscount"
          >
            <Radio.Group>
              <Radio value="yesUnionDuesDiscount"> Sim </Radio>
              <Radio value="noUnionDuesDiscount"> Não </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row
        className="flex flex-row items-center justify-start p-2"
        gutter={[16, 8]}
      >
        <Col span={8}>
          <Form.Item
            label="Banco:"
            name="bank"
            rules={[
              {
                required: true,
                message: "Por favor, informe o banco da conta bancária!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Agência:"
            name="agency"
            rules={[
              {
                required: true,
                message: "Por favor, informe a agência da conta bancária!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Conta corrente/poupança:"
            name="bankAccount"
            rules={[
              {
                required: true,
                message: "Por favor, informe a CC/CA da conta bancária!",
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

export default Banking;
