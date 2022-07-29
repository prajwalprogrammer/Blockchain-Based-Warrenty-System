
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from 'react-bootstrap'
import {  Form } from 'react-bootstrap'
import React,{ useState, useEffect} from "react";

const CreateDefault=(props)=>{
    const [image, setImage] = useState('')
  const [serial, setSerial] = useState('')
  const [UserAddress, setUserAddress] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [expDate, setExpDate] = useState('12-21-2222')

    return(
        
        <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                onChange={{}}
              />
              <Form.Control onChange={(e) => setSerial(e.target.value)} size="lg" required type="number" placeholder="Serial Number" />
              <Form.Control onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
              <Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
              <Form.Control onChange={(e) => setUserAddress(e.target.value)} size="lg" required type="text" placeholder="User Adress:" />
              <Form.Control onChange={(e) => setExpDate(e.target.value)} size="lg" required type="date" placeholder="Set Expiry Date: " />
              {/* <Form.Control onChange={(e) => setTime(e.target.value)} size="lg"/> */}
              <div className="d-grid px-0">
                <Button onClick={{}} variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
    )
}

export default CreateDefault;