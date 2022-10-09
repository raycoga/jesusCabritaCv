import React, { memo } from "react";
import { Card, Col, Row } from "antd";
import "./Experience.scss";

const experienceEs = [
  {
    title: (
      <div className="card-title">
        <h3>Desarrollador de Software</h3>
        <a
          href="https://www.linkedin.com/company/newtech-solutions-group/?originalSubdomain=ve"
          target="_blank"
          rel="noreferrer"
        >
          Newtech
        </a>
      </div>
    ),
    description:
      "Ejerciendo el cargo como desarrollador Front End Developer en Reactjs, manejando tecnologías como React Native y Nextjs",
    extra: "Sep 2022 - Al presente",
  },
  {
    title: (
      <div className="card-title">
        <h3>Ingeniero de Software</h3>
        <a
          href="https://www.linkedin.com/company/dacodes/"
          target="_blank"
          rel="noreferrer"
        >
          Dacodes
        </a>
      </div>
    ),
    description:
      "Desarrollador especializado en JavaScript (Front-End), Encargado del desarrollo y maquetación de aplicativos web y móviles mediante el uso de herramientas de desarrollo Reactjs, React Native y Nextjs",
    extra: "May 2021 - Al presente",
  },
  {
    title: (
      <div className="card-title">
        <h3>Desarrollador Web</h3>
        <a
          href="https://www.linkedin.com/company/eyss/about/"
          target="_blank"
          rel="noreferrer"
        >
          Eyss
        </a>
      </div>
    ),
    description:
      "Como desarrollarlo JavaScript(Front End), soy el encargado de llevar a cabo la maquetación y elaboración de los aplicativos, atreves de herramientas como React js y React native.",
    extra: "May 2019 - May 2021",
  },
  {
    title: (
      <div className="card-title">
        <h3>Consultor en Automatización</h3>
        <a
          href="https://www.linkedin.com/company/globalr/?originalSubdomain=ve"
          target="_blank"
          rel="noreferrer"
        >
          Global Resources C.A
        </a>
      </div>
    ),
    description:
      "Como encargado en el desarrollo de aplicaciones que agilizan el proceso y automatización de procesos realizados por los consultores QA, con la intención de mejorar la calidad del servicio.",
    extra: "Nov 2018 - May 2019",
  },
  {
    title: (
      <div className="card-title">
        <h3>Pasante - Interno</h3>
        <a
          href="https://www.linkedin.com/company/globalr/?originalSubdomain=ve"
          target="_blank"
          rel="noreferrer"
        >
          Global Resources C.A
        </a>
      </div>
    ),
    description:
      "Periodo de pasantías en el área de consultoría QA desarrollando una herramienta de gestión de pruebas sobre la plataforma de mensajería instantánea de movistar, utilizando angular 2, java para desarrollo nativo, nodejs y postgresSQL.",
    extra: "Ago 2018 - Nov 2019",
  },
  {
    title: (
      <div className="card-title">
        <h3>Pasante - Interno</h3>

        <a
          href="https://www.linkedin.com/company/vocem-2013-teleservicios-s.a./?originalSubdomain=ve"
          target="_blank"
          rel="noreferrer"
        >
          Vocem
        </a>
      </div>
    ),
    description:
      "Periodo de pasantías en la jefatura de telecomunicaciones y seguridad de la información ",
    extra: "Abr 2018 - Ago 2018",
  },
];
const formationEs = [
  {
    title: (
      <div className="card-title">
        <h3>Ingeniería de sistemas</h3>
      </div>
    ),
    description: (
      <a href="https://virtualunexpo.com" target="_blank" rel="noreferrer">
        Universidad Nacional Experimental Politécnica Antonio José de Sucre
      </a>
    ),

    extra: "Enero 2012 - Feb 2019",
  },
  {
    title: (
      <div className="card-title">
        <h3>Bachiller en ciencias</h3>
      </div>
    ),
    description: (
      <a
        href="https://www.instagram.com/colegiosanmartinoficial/?hl=es"
        target="_blank"
        rel="noreferrer"
      >
        Unidad Educativa Colegio San Martin de Porres
      </a>
    ),
    extra: "Enero 2001 - Jul 2011",
  },
];

const RenderKnowlege = (knowlege) => {
  return knowlege.map((res, key) => {
    return (
      <Col key={key} className="gutter-row" span={24}>
        <Card type="inner" title={res.title} extra={res.extra}>
          <p>{res.description}</p>
        </Card>
      </Col>
    );
  });
};

const Experience = memo(() => {
  return (
    <div className="Experience">
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={24}>
          <h1>Experiencia Laboral</h1>
        </Col>
        {RenderKnowlege(experienceEs)}
        <Col className="gutter-row" span={24}>
          <h1>Formación Academica</h1>
        </Col>
        {RenderKnowlege(formationEs)}
      </Row>
    </div>
  );
});

export default Experience;
