import { Col } from "react-bootstrap"

const InfoForPage = () => {
  return (
    <Col
      className="d-none d-lg-flex h3 align-items-center justify-content-center"
      lg={12}
    >
      <div className="d-flex flex-row align-items-center">
        <h3>Temperature Converter | </h3>
        <a
          className="mx-3"
          href="https://wlcharlie.github.io/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fas fa-home fa-x text-light" />
        </a>
        <a
          href="https://github.com/wlcharlie/temperature-converter"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-github fa-x text-light" />
        </a>
      </div>
    </Col>
  )
}

export default InfoForPage
