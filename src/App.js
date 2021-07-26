import "./App.css"
import { ProgressBar, Container, Form } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container className="w-100">
        <div className="w-75 d-flex mx-auto mb-5 rounded-3 border border-light bg-light text-dark">
          <h1 className="w-100 text-center my-1">Temperature Converter</h1>
        </div>

        <div className="text-start">
          <div className="my-2 w-75 d-flex align-items-center mx-auto">
            <label className="w-25">{`12\xB0C`}</label>
            <ProgressBar className="w-75" now={50} />
          </div>
          <div className="my-2 w-75 d-flex align-items-center mx-auto">
            <label className="w-25">{`12\xB0F`}</label>
            <ProgressBar className="w-75" now={50} />
          </div>
          <div className="my-2 w-75 d-flex align-items-center mx-auto">
            <label className="w-25">{`120 K`}</label>
            <ProgressBar className="w-75" now={50} />
          </div>
        </div>

        <Form className="mt-5 d-flex justify-content-center">
          <Form.Group className="w-50 d-flex justify-content-center rounded-3 border border-light bg-light text-dark py-1 mx-1">
            <Form.Control
              type="number"
              className=" mx-1 bg-transparent border-0 rounded-0  reset"
              dir="rtl"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="w-25 d-flex justify-content-center rounded-3 border border-light bg-light text-dark py-1 mx-1">
            <Form.Select className=" bg-transparent border-0  rounded-0  reset">
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
