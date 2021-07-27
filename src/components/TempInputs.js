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
    <Row>
      <Col id="tempC" xs={12} xl={4}>
        <Form.Control as="textarea" value={tempC} onChange={getTempC} />
        <div className="tempNum">{"\xB0"}C</div>
      </Col>
      <Col id="tempF" xs={12} xl={4}>
        <Form.Control as="textarea" value={tempF} onChange={getTempF} />
        <div className="tempNum">{"\xB0"}F</div>
      </Col>
      <Col id="tempK" xs={12} xl={4}>
        <Form.Control as="textarea" value={tempK} onChange={getTempK} />
        <div className="tempNum">K.</div>
      </Col>
    </Row>
  )
}

export default TempInputs
