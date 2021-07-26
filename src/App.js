import "./App.css"
import { ProgressBar, Container, Form } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container className="w-100">
        <div className="my-2 w-75 d-flex align-items-center mx-auto">
          <label className="w-25">{`12\xB0C`}</label>
          <ProgressBar className="w-75" now={50} />
        </div>
        <div className="my-2 w-75 d-flex align-items-center mx-auto">
          <label className="w-25">{`12\xB0F`}</label>
          <ProgressBar className="w-75" now={50} />
        </div>
        <div className="my-2 w-75 d-flex align-items-center mx-auto">
          <label className="w-25">{`12 K`}</label>
          <ProgressBar className="w-75" now={50} />
        </div>
        <Form className="mt-5">
          <Form.Group className="w-100 d-flex justify-content-center">
            <Form.Control
              type="number"
              className="w-25 mx-1 bg-transparent border-0 border-bottom rounded-0  text-white reset"
              dir="rtl"
            ></Form.Control>
            <Form.Select className="w-25 bg-transparent border-0 border-bottom rounded-0 text-light reset">
              <option value="tempC">{"\xB0C"}</option>
              <option value="tempF">{"\xB0F"}</option>
              <option value="tempK">{"K"}</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default App
