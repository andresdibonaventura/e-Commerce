import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchasesCard = ({purchase}) => {

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)


  return (
    <article className='purchase-card'>
      <h3>Date of purchase: {date}</h3>
      {
        purchase.cart.products.map(product => (
          <ProductsPurchase 
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard