import React from 'react'
import { removeFromCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

function Cart() {
  const cartitems = useSelector((state) => state.cartreducer);
  const dispatch = useDispatch()
  return (

    <>
      <button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>

        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home</Link>
      </button>
      <div className='row w-100'>
        {
          cartitems?.length > 0 ?
            <div className='col-1g-6 col-md-6 m-5'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartitems?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img height={'50px'} src={item.thumbnail} alt="" /></td>
                        <td>&#8377;{item.price}</td>
                        <td> <Button
                          onClick={() => dispatch(removeFromCart(item.id))}

                          variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
                      </tr>

                    ))
                  }

                </tbody>

              </table>
            </div> :
            <p className='text-danger'>NO ITEMS IN CART</p>
        }


      </div>
    </>
  )
}

export default Cart