import React from 'react'

const CartInfo = ({productCart}) => {
  return (
    <section className='cartProductss'>
      
      <h4 className='productBrand'>{productCart.brand}</h4>
      <h3 className='productTitleCart'>{productCart.title}</h3>
      <p>{productCart.productsInCart.quantity}</p>
    </section>
  )
}

export default CartInfo