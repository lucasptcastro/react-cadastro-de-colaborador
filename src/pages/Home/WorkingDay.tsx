import { Card, Col, Form, Row, Space, Typography, TimePicker } from "antd";
import React from "react";

const Admission: React.FC = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Form
      form={form}
      name="frmWorkingDay"
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
        <Col span={24}>
          <Card
            title="DEFINIR HORÁRIOS DA JORNADA DE TRABALHO"
            className="drop-shadow-lg"
            style={{
              borderRadius: "10px",
            }}
          >
            <Row
              className="flex flex-row justify-around items-baseline p-2"
              gutter={16}
            >
              <Col span={12}>
                <Form.Item>
                  <Space direction="vertical">
                    <p className="required-global text-justify">
                      Escolha abaixo nas janelas de horários, as jornadas
                      referentes de segunda a quinta e a jornada de sexta.
                    </p>
                    <p className="required-global text-justify">
                      Leve em consideração:
                    </p>
                    <li className="list-disc ml-8 text-justify">
                      Horário de início
                    </li>
                    <li className="list-disc ml-8 text-justify">
                      Duração de hora no almoço
                    </li>
                    <li className="list-disc ml-8 text-justify">
                      Horário de início do horário de almoço (a cada 30min da
                      janela)
                    </li>
                    <li className="list-disc ml-8 text-justify">
                      Horário de saída Lembre que sua escolha deve completar a
                      carga horária de 44h semanais
                    </li>
                    <li className="list-disc ml-8 text-justify">
                      Tempo de descanso: 01 hora no mínimo e 02 horas no máximo
                    </li>
                    <li className="list-disc ml-8 text-justify">
                      Carga horária: 44h semanais
                    </li>
                  </Space>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Space direction="horizontal">
                    <Typography.Text className="required-global">
                      Janela de horário de funcionamento (segunda à quinta):
                    </Typography.Text>
                    <Typography.Text className="bg-green-100">
                      07:30 às 19:30
                    </Typography.Text>
                  </Space>
                </Form.Item>
                <Space direction="horizontal">
                  <Form.Item>
                    <Space direction="horizontal">
                      <Typography.Text className="right-arrow ml-6">
                        Escolha o horário:
                      </Typography.Text>
                    </Space>
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Por favor, informe o horário!",
                      },
                    ]}
                  >
                    <TimePicker.RangePicker
                      format={"HH:mm"}
                      style={{ borderRadius: "5px" }}
                    />
                  </Form.Item>
                </Space>
                <Form.Item>
                  <Space direction="horizontal">
                    <Typography.Text className="required-global">
                      Janela de horário de funcionamento (sexta):
                    </Typography.Text>
                    <Typography.Text className="bg-green-100">
                      07:30 às 19:30
                    </Typography.Text>
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Space direction="horizontal">
                    <Typography.Text className="right-arrow ml-6">
                      Escolha o horário:
                    </Typography.Text>
                    <TimePicker.RangePicker
                      format={"HH:mm"}
                      style={{ borderRadius: "5px" }}
                    />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Space direction="horizontal">
                    <Typography.Text className="required-global">
                      Janela de horário de almoço:
                    </Typography.Text>
                    <Typography.Text className="bg-green-100">
                      11:00 às 14:00
                    </Typography.Text>
                  </Space>
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor, informe o e-mail!",
                    },
                  ]}
                >
                  <Space direction="horizontal">
                    <Typography.Text className="right-arrow ml-6">
                      Escolha o horário:
                    </Typography.Text>
                    <TimePicker.RangePicker
                      format={"HH:mm"}
                      style={{ borderRadius: "5px" }}
                    />
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default Admission;
