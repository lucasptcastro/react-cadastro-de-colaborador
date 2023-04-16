import React from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Typography,
} from "antd";
import { BsPlusSquare } from "react-icons/bs";

const Benefits: React.FC = () => {
  const [valueTransportationVoucher, setValueTransportationVoucher] =
    React.useState();
  const [form] = Form.useForm();
  const onChangeTransportationVoucher = (e: RadioChangeEvent) => {
    setValueTransportationVoucher(e.target.value);
  };

  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const OI = () => {
    return (
      <div className="flex flex-row items-center justify-around h-7 pr-4">
        <Typography.Text>Uso do vale transporte?</Typography.Text>
        <BsPlusSquare
          onClick={showModal}
          className="hover:scale-110 ease-linear duration-300 cursor-pointer ml-2 text-2xl"
          style={{
            visibility:
              valueTransportationVoucher === "transportationVoucherYes"
                ? "visible"
                : "collapse",
          }}
        />
      </div>
    );
  };

  return (
    <Form
      form={form}
      name="frmBenefits"
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
            title="OPÇÕES DE BENEFÍCIOS/AUXÍLIOS"
            className="drop-shadow-lg"
            style={{
              borderRadius: "10px",
            }}
          >
            <Typography.Title level={4}>Auxílio transporte</Typography.Title>
            <Row
              className="flex flex-row justify-around items-baseline p-2"
              gutter={100}
            >
              <Col span={12}>
                <Form.Item>
                  <Space direction="vertical">
                    <p className="required-global text-justify">
                      Caso opte pelo auxílio transporte, conforme disposto na
                      legislação correspondente, será descontado 6% do valor do
                      salário.
                    </p>
                  </Space>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Space direction="horizontal">
                  <Form.Item
                    label={<OI />}
                    name="transportationVoucher"
                    rules={[
                      {
                        required: true,
                        message: "Obrigatório!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeTransportationVoucher}>
                      <Radio value="transportationVoucherYes">Sim</Radio>
                      <Radio value="transportationVoucherNo">Não</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="lblRegistrationTransportation">
                    <Modal
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={350}
                    >
                      <Typography.Title level={5}>
                        DADOS DO AUXÍLIO TRANSPORTE
                      </Typography.Title>
                      <Divider className="mt-0" />
                      <Row className="flex flex-row justify-start items-center p-2">
                        <Space direction="vertical">
                          <Space direction="horizontal">
                            <p>Quantidade de ônibus por dia:</p>
                            <InputNumber
                              className="w-20"
                              min={1}
                              max={10}
                              defaultValue={3}
                              style={{
                                borderRadius: "5px",
                              }}
                            />
                          </Space>
                          <Space direction="horizontal">
                            <p>Município:</p>
                            <Input />
                          </Space>
                          <Space direction="horizontal">
                            <p>Empresa de ônibus:</p>
                            <Input
                              style={{
                                width: "9rem",
                              }}
                            />
                          </Space>
                          <Space direction="horizontal">
                            <p>Linha:</p>
                            <Input
                              style={{
                                width: "14.3rem",
                              }}
                            />
                          </Space>
                          <Space direction="horizontal">
                            <p>Valor:</p>
                            <Input
                              style={{
                                width: "14.4rem",
                              }}
                              prefix="R$"
                            />
                          </Space>
                        </Space>
                      </Row>
                    </Modal>
                  </Form.Item>
                </Space>
              </Col>
            </Row>
            <Typography.Title level={4}>
              Auxílio alimentação/combustível
            </Typography.Title>
            <Row
              className="flex flex-row justify-around items-baseline p-2"
              gutter={100}
            >
              <Col span={12}>
                <Form.Item>
                  <Space direction="vertical">
                    <p className="required-global text-justify">
                      Auxílio concedido através de cartão magnético da empresa
                      Sodexo. O cartão será entregue em até 15 dias úteis após
                      sua contratação.
                    </p>
                    <p className="required-global text-justify">
                      Para o valor da recarga, será considerada o mês da
                      competência de pagamento da folha e o valor creditado será
                      proporcional a data de admissão. No caso de ausências, o
                      dia será descontado na próxima recarga.
                    </p>
                    {/* <p className="required-global text-justify">
                                            O valor é de R$15,00/dia
                                            correspondente aos dias trabalhados
                                            no mês seguinte. Alterações da opção
                                            após um ano.
                                        </p> */}
                  </Space>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Space direction="horizontal">
                  <Form.Item
                    label="Marque a opção de benefício:"
                    name="transportationVoucher"
                    rules={[
                      {
                        required: true,
                        message: "Obrigatório!",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value="fullFoodVoucher">
                          100% SODEXO VALE ALIMENTAÇÃO
                        </Radio>
                        <Radio value="fullFuelVoucher">
                          100% SODEXO VALE COMBUSTÍVEL
                        </Radio>
                        <Radio value="halfVoucher">
                          50% SODEXO VALE ALIMENTAÇÃO E 50% SODEXO VALE
                          COMBUSTÍVEL
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </Space>
              </Col>
            </Row>
            <Typography.Title level={4}>
              Auxílio alimentação/combustível
            </Typography.Title>
            <Row
              className="flex flex-row justify-start items-baseline p-2"
              gutter={100}
            >
              <Col span={12}>
                <Form.Item>
                  <Space direction="vertical">
                    <p className="required-global text-justify">
                      A empresa possui convênio com o Plano de Saúde Unimed
                      Natal. O convênio apresenta suas características e
                      valores. A empresa participa do pagamento do convênio,
                      contudo em alguns casos tem co-participação
                      (responsabilidade do colaborador). A ajuda de custo é de
                      20% após três meses de experiência para a mensalidade do
                      plano de saúde. O auxílio saúde está disponível para o
                      colaborador após o período de experiência (três meses). A
                      qualquer momento pode entrar em contato com a
                      administração para saber mais informações.
                    </p>
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

export default Benefits;
