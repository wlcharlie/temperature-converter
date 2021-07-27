import { useState } from "react"
import { Row, Col, Form } from "react-bootstrap"

const TempInputs = () => {
  const [tempC, setTempC] = useState(0)
  const [tempF, setTempF] = useState(32)
  const [tempK, setTempK] = useState(273)

  const getTempC = (event) => {
    setTempC(+event.target.value)
    setTempF((32 + (9 / 5) * +event.target.value).toFixed(2))
    setTempK((273 + +event.target.value).toFixed(2))
  }

  const getTempF = (event) => {
    setTempF(+event.target.value)
    setTempC((-32 + (5 / 9) * +event.target.value).toFixed(2))
    setTempK((((+event.target.value + 459.67) * 5) / 9).toFixed(2))
  }

  const getTempK = (event) => {
    setTempK(+event.target.value)
    setTempC((-273 + +event.target.value).toFixed(2))
    setTempF((32 + (9 / 5) * (-273 + +event.target.value)).toFixed(2))
  }

  return (
    <Row className="input">
      <Col id="tempC" xs={10} lg={4}>
        <Form.Control
          as="textarea"
          maxLength="12"
          rows="1"
          value={tempC}
          data-temp="C"
          onChange={getTempC}
        />
        <div className="tempSign">{"\xB0"}C</div>
      </Col>
      <Col
        className="d-lg-none align-items-start text-wrap title fst-italic"
        xs={2}
      >
        Temp. Converter
      </Col>
      <Col id="tempF" xs={10} lg={4}>
        <Form.Control
          as="textarea"
          maxLength="12"
          rows="1"
          value={tempF}
          data-temp="F"
          onChange={getTempF}
        />
        <div className="tempSign">{"\xB0"}F</div>
      </Col>
      <Col
        className="d-lg-none d-flex justify-content-center align-items-center"
        xs={2}
      >
        <a href="https://github.com/wlcharlie/temperature-converter">
          <i className="fab fa-github fa-2x text-light" />
        </a>
      </Col>
      <Col id="tempK" xs={10} lg={4}>
        <Form.Control
          as="textarea"
          maxLength="12"
          rows="1"
          value={tempK}
          data-temp="K"
          onChange={getTempK}
        />
        <div className="tempSign">K.</div>
      </Col>
      <Col
        className="d-lg-none d-flex justify-content-center align-items-center"
        xs={2}
      >
        <a href="https://wlcharlie.github.io/">
          <i className="fas fa-home fa-2x text-light" />
        </a>
      </Col>
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
    </Row>
  )
}

export default TempInputs
