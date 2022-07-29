import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from 'react-bootstrap'

const Item=(props)=>{
    return(
        
        <div className="flex justify-center">
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
              <Col key={props.id} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={props.img} />
                  <Card.Body color="secondary">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.price} ETH 
                    </Card.Text>
                    <Card.Text>
                      {props.productDesc}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>
                    <Link to={`/${props.id}`}><Button onClick={() =>{}} variant="primary" size="lg">
                        Buy Now
                         {/* for {ethers.utils.formatEther(item.totalPrice)} ETH */}
                      </Button></Link>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
          </Row>
        </div>
        </div>
    )
}

export default Item;