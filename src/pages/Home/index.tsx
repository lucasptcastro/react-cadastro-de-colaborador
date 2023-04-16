import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  message,
  Row,
  Steps,
  Typography,
} from "antd";
import React from "react";
import WorkingDay from "./WorkingDay";
import PersonalInformations from "./PersonalInformations";
import Geral from "./Geral";
import Adress from "./Adress";
import Documentation from "./Documentation";
import Benefits from "./Benefits";

const { Step } = Steps;

const steps = [
  {
    title: "Dados Pessoais",
    content: <PersonalInformations />,
  },
  {
    title: "Endereço",
    content: <Adress />,
  },
  {
    title: "Documentação",
    content: <Documentation />,
  },
  {
    title: "Jornada de trabalho",
    content: <WorkingDay />,
  },
  {
    title: "Benefícios",
    content: <Benefits />,
  },
  {
    title: "Geral",
    content: <Geral />,
  },
];

const Index: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Card bordered={false} style={{ borderRadius: "10px" }} className="">
        <div className="m-6">
          <Breadcrumb>
            <Breadcrumb.Item>Cadastro de colaborador</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Divider />
        <br />
        <Typography.Title className="m-6 text-center">
          Cadastro de Colaborador
        </Typography.Title>
        <br />
        <Row>
          <Col span={24}>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action flex flex-row justify-end ">
              {current > 0 && (
                <div className="mx-4 mt-4">
                  <Button type="default" onClick={() => prev()}>
                    Anterior
                  </Button>
                </div>
              )}
              {current === steps.length - 1 && (
                <div className="mt-4">
                  <Button
                    onClick={() => message.success("Cadastro completo!")}
                    style={{ borderRadius: "5px" }}
                  >
                    Cadastar
                  </Button>
                </div>
              )}
              {current < steps.length - 1 && (
                <div className="mt-4">
                  <Button onClick={() => next()}>Próximo</Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Index;
