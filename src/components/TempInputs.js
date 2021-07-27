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

  const getTemp = (event) => {}

  return (
    <Row>
      <Col id="tempC" xs={12} lg={4}>
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
      <Col id="tempF" xs={12} lg={4}>
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
      <Col id="tempK" xs={12} lg={4}>
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
    </Row>
  )
}

export default TempInputs
