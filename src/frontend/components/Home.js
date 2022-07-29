import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import './App.css';
const Home = ({ marketplace, nft,account }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const loadMarketplaceItems = async () => {
    console.log('loading');
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    // console.log(itemCount);
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      console.log("1",item);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        // Add item to items array
        console.log("metadata ",metadata)
        if(account.toLowerCase()===item.UserAddress.toLowerCase()){

          items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          buyer: item.UserAddress,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
        }
      }
    }
    setLoading(false)
    setItems(items)
    console.log("first"+ JSON.stringify(items))
  }

  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )

  function sayHello() {
    alert('Make sure you claim correct warranty card with unique serial number sent on your mobile number.');
    const newLocal = window.location.href = 'localhost:3000/login';
    newLocal();
}

  return (
    <div className="flex justify-center">
      <body>
          <marquee> Note: Before claiming the warranty, make sure you claim correct card with the unique serial number provided to you in message!</marquee>
      </body>
      {items.length > 0 ?
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>
                      <Button onClick={() => buyMarketItem(item) && sayHello()} variant="primary" size="lg">
                        Claim your Warranty
                         {/* for {ethers.utils.formatEther(item.totalPrice)} ETH */}
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )}
    </div>
  );
}
export default Home