import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productDetailStore } from '../slices/DetailsSlice';
import { productDetailStatus } from '../slices/DetailsSlice';
function Product() {

  // states
  const [state, setState] = useState([])
  const [search, setSearch] = useState([])


  // redux storage
  const details = useDispatch()
const statusUpdate = useDispatch()

  // api fetching
  useEffect(() => {
    const apiFetch = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setState(data)
    }
    apiFetch();
  }, [])


  // product details fetching
  const getDetails = async (id) => {
    details(productDetailStore(""))
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    details(productDetailStore(data))
  }

  // product details status
  const updateStatus = () => {
    statusUpdate(productDetailStatus("flex"))
  }

  return (
    <>
      <div className='flex gap-6 items-center justify-center bg-gray-200 h-16 w-[full]'>
        <input onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search' className='w-96 h-12 rounded-3xl outline-none p-5' type="text" />
        <label className='text-gray-400 hidden sm:block md:block lg:block' htmlFor="">Search By Name</label>
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {
          state.filter((items) => {
            return state == ''
              ? items
              : items.title.toLowerCase().includes(search)
          }).map((product) => (
            <div className='p-5 flex flex-col gap-3 h-72 w-68 cursor-pointer duration-300 text-center items-center justify-center bg-gray-200 rounded-2xl' key={product.id}>
              <img className='h-20 w-18 mix-blend-multiply bg-transparent center' src={product.image} alt="" />
              <h3 className='text-[14px]' >{product.title}</h3>
              <h5 className='text-orange-700' > {product.category.toUpperCase()}</h5>
              <button onClick={() => {
                getDetails(product.id)
                updateStatus()
              }}
                className='bg-green-400 rounded p-2 px-5 hover:bg-green-300'>About Product</button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Product;
