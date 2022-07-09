import React, { useState } from 'react'
import {
    DropdownItem,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
  } from "reactstrap";
  import { useNavigate } from "react-router-dom";
  // import "bootstrap/dist/css/bootstrap.min.css";
  
  

const Filtter = () => {

    const [dropdown, setDropdown] = useState(false);


    const openCloseDropdown = () => {
      setDropdown(!dropdown);
    };
    const navigate = useNavigate();
    const clickCard = e => {
      const typeSelected = e.target.textContent
      navigate(`/category/${typeSelected}`)
  
    }
  return (
    
    <Dropdown className='filterPos' isOpen={dropdown} toggle={openCloseDropdown}>
        {/* <DropdownToggle className="filter"></DropdownToggle> */}
        <DropdownMenu className='categories'>
          <DropdownItem className='category'  onClick={clickCard} >Smartphones</DropdownItem>
          <DropdownItem className='category' onClick={clickCard} >Smart TV</DropdownItem>
          <DropdownItem className='category' onClick={clickCard} >Computers</DropdownItem>
       
        </DropdownMenu>
      </Dropdown>
  )

}

export default Filtter