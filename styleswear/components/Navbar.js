import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
// AiOutlineShoppingCart
// IoBagCheckOutline
import { BsFillBagCheckFill } from 'react-icons/bs'





const navbar = () => {
    const ref = useRef();
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')

        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')

        }

    }
    return (
        <div className='flex bg-white flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md '>
            <div className="logo mx-5">
                <Link href={'/'}> <Image width={200} height={40} src="/logo.png" alt='' /></Link>
            </div>
            <div className="nav lg:ml-12">
                <ul className=" flex  items-center space-x-10 text-black-700 font-extrabold md:text-md ">
                    <Link href={'/tshirts'}>T-shirts</Link>
                    <Link href={'/hoodies'}>Hoodies</Link>
                    <Link href={'/shoes'}>Shoes</Link>
                    <Link href={'/trouser'}>Trouser</Link>
                </ul>
            </div>

            <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5 cursor-pointer text-2xl">
                <AiOutlineShoppingCart className='text-1xl text-blue-700 md:text-3xl' />
            </div>

            <div ref={ref} className="w-72 sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transition-transform translate-x-full">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-blue-400"><AiFillCloseCircle /></span>
                <ol className='list-decimal font-s'>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the stylish</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle /><span className='mx-2'>1</span><AiFillPlusCircle /></div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the stylish</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle /><span className='mx-2'>1</span><AiFillPlusCircle /></div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the stylish</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle /><span className='mx-2'>1</span><AiFillPlusCircle /></div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the stylish</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle /><span className='mx-2'>1</span><AiFillPlusCircle /></div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the stylish</div>
                            <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle /><span className='mx-2'>1</span><AiFillPlusCircle /></div>
                        </div>
                    </li>
                </ol>
                <button className="flex mx-auto mt-16 text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"><BsFillBagCheckFill className='m-1' />Checkout</button>

            </div>
        </div>


    )
}

export default navbar

