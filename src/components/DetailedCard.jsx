import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailStatus } from '../slices/DetailsSlice';
function DetailedCard({ display = "hidden" }) {
    const selector = useSelector(state => state.counter.state)
    const dispatch = useDispatch()

    const close = () => {
        dispatch(productDetailStatus('hidden'))
    }

    console.log(selector)
    return (
        <div className={`${display}`}>
        <div  className={`overflow-y-auto rounded-3xl flex items-center justify-center flex-col sm:flex-col lg:flex-row md:flex-row fixed  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[75vh] sm:h-[75vh] md:h-[50vh] lg:h-[50vh] w-[80vw] overflow-hidden bg-gray-300 border border-zinc-700`}>
            <img className='sm:w-58 w-48 mix-blend-multiply' src={selector.image} alt="" />
            <div className='flex flex-col gap-6 p-4'>
                <div><label className='text-blue-500' htmlFor="">Category :</label> {selector.category}</div>
                <div className='text-[14px]' ><label className='text-gray-400' htmlFor="">Description : </label>{selector.description}</div>
                <div className='text-red-500'><label className='text-black' htmlFor="">Price : </label> $ {selector.price}</div>
            </div>
            <button onClick={() => close()} className='bg-red-700 p-1 rounded-lg fixed right-12 bottom-12 px-4'>Close</button>
        </div>
        </div>
    );
}

export default DetailedCard;
