import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
// import { useForm } from 'react-hook-form'

const InputSearch = ({setFilterProducts}) => {

  // const {handleSubmit, register, } = useForm()
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])
    const [tableProduct, setTableProduct] = useState([])

    const controlSearch = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
      axios.get(URL, getConfig)
      .then(res => {setProduct(res.data.data.products);
      setTableProduct(res.data.data.products
        )
    })
      .catch(err => console.log(err))
    }

    const handleChange = e => {
      setSearch(e.target.value);
      filterr(e.target.value);
    }
    useEffect(() => {
      controlSearch()
    } ,[])
    
  
  const filterr = (searchT) => {
    
    var searchResult=tableProduct.filter((elemento)=>{
      if (elemento.title.toString().toLowerCase().
      includes
      (searchT.toLowerCase())){
        return true;
      }
     
    });
    console.log(searchResult)
    setFilterProducts(searchResult);
  }
  

  return (
    <form   className='form-home'>
      <input
       className='input' 
       onChange={handleChange}
       placeholder="Buscar"
       value={search}
       type="text"
       /> 
        <i className="fa-solid fa-magnifying-glass"></i>
     
      
    </form>
  )
}

export default InputSearch