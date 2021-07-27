import { Col } from "react-bootstrap"

const InfoGithub = () => {
  return (
    <Col
      className="d-lg-none d-flex justify-content-center align-items-center"
      xs={2}
    >
      <a
        href="https://github.com/wlcharlie/temperature-converter"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fab fa-github fa-2x text-light" />
      </a>
    </Col>
  )
}

export default InfoGithub
