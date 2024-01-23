import React, { useEffect, useState } from 'react'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
//import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

function Cart() {
//const [total, setTotal] = useState(0)
  const cartitems = useSelector((state) => state.cartreducer);
  let totalprice = 0;
  cartitems?.forEach(item=>{
    totalprice = totalprice+item.price
  })
 
  const dispatch = useDispatch()
  const Navigate=useNavigate()
  const handleCheckout =()=>{
    alert("successfully placed the order")
    dispatch(emptyCart())
    Navigate('/')
  }




  return (


    <>
       {/* <div> */}
      <button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>

        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home</Link>
      </button>
      <div className='row w-100'>
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
                cartitems?.length > 0 ?
                  cartitems?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img height={'50px'} width={'50px'} src={item.thumbnail} alt="" /></td>
                      <td>&#8377;{item.price}</td>
                      <td> <Button
                        onClick={() => dispatch(removeFromCart(item.id))}

                        variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                      </td>
                    </tr>

                  ))
                  :
                  <p className='text-danger'>NO ITEMS IN CART</p>
              }

            </tbody>

          </table>
        </div>



      {/* </div> */}
      <div className='col-1g-4 col-md-4  d-flex justify-content-center align-items-center'>
        <div className='border shadow p-5'>
          <h3 className='text-primary  '>Cart Summary</h3>
          <h5>Total Number of products:<span className='fw-bolder text-warning ms-2'>{cartitems?.length}</span></h5>
          <h5>Total price:<span className='fw-bolder text-warning ms-2'>{totalprice}</span></h5>
          <button className='btn btn-success rounded w-100 mt-3 ' onClick={handleCheckout}>CHECKOUT</button>
        </div>
      </div>
      </div>
     
    

    </>
  )
}

export default Cart