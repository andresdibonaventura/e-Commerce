import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Filtter from './Filtter'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'
import { useParams } from 'react-router-dom'

const HomeScreen = () => {


  const products = useSelector(state => state.products)

  console.log(products)
// const [productsResult, setProductsResult] = useState()
 
// const {name} = useParams()
// useEffect(() => {
//   if (name) {
//     setProductsResult(products?.filter(e => e.category.name === name))
//    } else {
//     setProductsResult(products)
//    }
// } ,[name])
 

  return (
    <div className='home'>
      
      <div>
      <InputSearch />
      {/* <Filtter /> */}
        </div>
      <div className='products-container'>
        {
          products?.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen