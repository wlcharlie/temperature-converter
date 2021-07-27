import { Col } from "react-bootstrap"

const InfoHomePage = () => {
  return (
    <Col
      className="d-lg-none d-flex justify-content-center align-items-center"
      xs={2}
    >
      <a
        href="https://wlcharlie.github.io/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fas fa-home fa-2x text-light" />
      </a>
    </Col>
  )
}

export default InfoHomePage
