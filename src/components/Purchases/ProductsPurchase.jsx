import React from 'react'


const ProductsPurchase = ({product}) => {

  console.log(product)

  return (
    <section className='individualProduct'>
      
      <h4 className='purchasetitle'>{product.title}</h4>
      <p className='purchasequantity'>{product.productsInCart.quantity}</p>
      <p className='purchaseprice'>$ {product.price}</p>
    </section>
  )
}

export default ProductsPurchase