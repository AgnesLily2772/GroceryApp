import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactStripeCheckout from 'react-stripe-checkout';
const Checkout = (props) => {
  const [confirm,setConfirm] = useState(false);
    let finalCart = props.data.obj;
    let id = 1001;
    var arr = []
    var final = 0
    var total = 0
  let navigate = useNavigate();
const handleButton = ()=> {
  if(confirm)navigate('/delivery')
  else alert('Complete Payment First !!!')
}
  const onToken = token => {
    setConfirm(true)
};

  return (
  <>
    <div className='tableClass'>
        <h1>Grocery Bill</h1>
        <table className='table'>
        <thead>
    <tr>
      <th scope="col">Item No.</th>
      <th scope="col">Item Name</th>
      <th scope="col">Item Price</th>
      <th scope="col">Item Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
        <tbody>
        {
                Object.entries(finalCart).map(([key, val]) => 
                
                {
                  let key1 = key.split(' ')
                  let key11 = key1[1]
                   final = key11*val
                  arr.push(final)
                total = arr.reduce((a,b)=>a+b)
                    return (
                        <tr key={key}>
                            <td>{id++}</td>
                            <td>{key}</td>
                            <td>{key.match(/\d+/g)}</td>
                            <td>{val}</td>
                            <td>{final}</td>
                        </tr>
                    )
                }
                )
        }
        </tbody>
        </table>
        <p>Total Amount : {total}</p>
        {/* <button onClick={()=>setConfirm(true)} className='btn btn-outline-success'> */}
        <ReactStripeCheckout
        stripeKey="pk_test_51Lg6rsSEs239vqD1d4XOcIGjlmp4lGpr6mPYvdtjK6qcA460RZHVz8hvToHVY1FtNEn0JsDPBVHH6AfybjIoaGvu00yUrVBLLr"
        amount={total*100}
        description={`Your total is Rs. ${total}`}
        panelLabel='Pay Now'
        name="Grocery Items"
        billingAddress
        shippingAddress
        token={onToken}
        />  
        <br/>
        <button className='btn btn-success buttons' onClick={handleButton}>Delivery Slot</button>
    </div>

  </>

  )
}

export default Checkout