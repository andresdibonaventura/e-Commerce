import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form  onSubmit={handleSubmit(submit)} className='form-home'>
      <input className='input' type="text" {...register('searchText')} /> <i class="fa-solid fa-magnifying-glass"></i>
    </form>
  )
}

export default InputSearch