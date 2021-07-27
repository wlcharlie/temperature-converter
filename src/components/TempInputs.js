import { useState } from "react"
import { Row, Col, Form } from "react-bootstrap"

const TempInputs = () => {
  const [tempC, setTempC] = useState(0)
  const [tempF, setTempF] = useState(32)
  const [tempK, setTempK] = useState(273)

  const getTempC = (event) => {
    setTempC(event.target.value)
    let F = 32 + (9 / 5) * +event.target.value
    let K = 273 + +event.target.value
    setTempF(F)
    setTempK(K)
  }

  const getTempF = (event) => {
    setTempF(event.target.value)
    let C = -32 + (5 / 9) * +event.target.value
    let K = C + 273
    setTempC(C)
    setTempK(K)
  }

  const getTempK = (event) => {
    setTempF(event.target.value)
    let C = -273 + +event.target.value
    let F = 32 + 9 / 5(-273 + +event.target.value)
    setTempC(C)
    setTempF(F)
  }

  return (
    <Row>
      <Col id="tempC" xs={12} sm={4}>
        <Form.Control type="number" value={tempC} onChange={getTempC} />
        <div className="tempNum">{"\xB0"}C</div>
      </Col>
      <Col id="tempF" xs={12} sm={4}>
        <Form.Control type="number" value={tempF} onChange={getTempF} />
        <div className="tempNum">{"\xB0"}F</div>
      </Col>
      <Col id="tempK" xs={12} sm={4}>
        <Form.Control type="number" value={tempK} onChange={getTempK} />
        <div className="tempNum">K.</div>
      </Col>
    </Row>
  )
}

export default TempInputs
