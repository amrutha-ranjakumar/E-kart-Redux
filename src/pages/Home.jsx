
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/whishlistSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  const dispach = useDispatch()
  console.log(data);
  return (
    <>

      <Row className='ms-5 me-5  ' style={{ marginTop: "150px" }}>
        {
          data?.length > 0 ?
            data.map((item) => (
              <Col className='mb-5 ' sm={12} md={6} lg={4} x1={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>{item.description.slice(0, 50)}...</Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button
                        onClick={() => dispach(addToWishlist(item))}
                        variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
                      <Button 
                      onClick={()=>dispach(addToCart(item))}
                      variant="outline-success"><i className="fa-solid fa-cart-plus"></i></Button>
                    </div>

                  </Card.Body>
                </Card>
              </Col>

            )) :
            <p className='text-danger'>NOTHING TO DISPLAY</p>
        }

      </Row>
    </>
  )
}

export default Home