import React from "react";
import {
  Card,
  RadioChangeEvent,
  Table,
  Row,
  Col,
  Input,
  Form,
  Upload,
  Divider,
} from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { ColumnsType } from "antd/es/table";

const Adress: React.FC = (props) => {
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
      document: "Comprovante de residência ou declaração de endereço",
    },
  ];

  return (
    <Form
      form={form}
      name="frmAdressd"
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
            label="Endereço:"
            name="address"
            rules={[
              {
                required: true,
                message: "Por favor, informe o endereço!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Bairro:"
            name="district"
            rules={[
              {
                required: true,
                message: "Por favor, informe o bairro!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Cidade:"
            name="city"
            rules={[
              {
                required: true,
                message: "Por favor, informe a cidade!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item
            label="N°:"
            name="number"
            rules={[
              {
                required: true,
                message: "Por favor, informe o número da residência!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row className="flex flex-row items-center justify-start p-2" gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Naturalidade:"
            name="naturalness"
            rules={[
              {
                required: true,
                message: "Por favor, informe a naturalidade!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Nacionalidade:"
            name="nationality"
            rules={[
              {
                required: true,
                message: "Por favor, informe a nacionalidade!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Complemento:" name="complement">
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item
            label="CEP:"
            name="zipCode"
            rules={[
              {
                required: true,
                message: "Por favor, informe o CEP!",
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
            className="shadow-xl"
            style={{
              borderRadius: "10px",
            }}
          >
            <div className="flex flex-row justify-between items-center p-1">
              <p className="items-start">
                Comprovante de residência ou declaração de endereço
              </p>
              <div className="items-end">
                <span>
                  <Divider type="vertical" />
                  {<Upload />}
                </span>
              </div>
            </div>{" "}
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

export default Adress;
