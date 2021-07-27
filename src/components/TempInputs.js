import { React, useState } from "react"
import { Row, Col, Form } from "react-bootstrap"
import { useAlert } from "react-alert"

import InfoForPage from "./InfoForPage"
import InfoTitle from "./InfoForMobile/InfoTitle"
import InfoGithub from "./InfoForMobile/InfoGithub"
import InfoHomePage from "./InfoForMobile/InfoHomePage"

const TempInputs = () => {
  const alert = useAlert()
  const [tempC, setTempC] = useState(0)
  const [tempF, setTempF] = useState(32)
  const [tempK, setTempK] = useState(273)

  const getTempC = (event) => {
    if (ifNumber(event)) return
    setTempC(+event.target.value)
    setTempF((32 + (9 / 5) * +event.target.value).toFixed(2))
    setTempK((273 + +event.target.value).toFixed(2))
  }

  const getTempF = (event) => {
    if (ifNumber(event)) return
    setTempF(+event.target.value)
    setTempC((-32 + (5 / 9) * +event.target.value).toFixed(2))
    setTempK((((+event.target.value + 459.67) * 5) / 9).toFixed(2))
  }

  const getTempK = (event) => {
    if (ifNumber(event)) return
    setTempK(+event.target.value)
    setTempC((-273 + +event.target.value).toFixed(2))
    setTempF((32 + (9 / 5) * (-273 + +event.target.value)).toFixed(2))
  }

  const ifNumber = (event) => {
    if (isNaN(event.target.value)) {
      alert.show("Please type number.", { type: "error" })
      return true
    }
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
      <InfoTitle />
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
      <InfoGithub />
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
      <InfoHomePage />
      <InfoForPage />
    </Row>
  )
}

export default TempInputs
