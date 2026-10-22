import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../contex/CartContex'

export const Drawer = ({ open, setOpen }) => {
  const {productCart, removeFromCart} = useContext(CartContext);
  return (
    <>
      <div onClick={() => setOpen(false)} className={` fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
      <div className={` fixed top-0 right-0 z-50 h-full w-80 flex flex-col bg-blue-800 text-white transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className=' flex justify-between items-center p-4'>
          <h2 className=' font-bold'>carrito</h2>
          <button onClick={() => setOpen(false)} className=' cursor-pointer font-bold'>✕</button>
        </div>
        <div className=' flex flex-col overflow-y-auto p-2'>
          {productCart.length==0 && <span className=' text-center p-4'>el carrito está vacío</span>}
          {productCart.map((product) => (
            <div key={product.id} className=' flex gap-1 shadow shadow-gray-700 border border-s-gray-800 p-2 m-2  items-center flex-col bg-white text-black' >
              <h3 className=' font-bold'>{product.name}</h3>
              <span>en carrito: {product.quantity}</span>
              <span>{product.description}</span>
              <button onClick={() => removeFromCart(product.id, product.quantity)} className=' bg-red-700 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-md transition-colors'>quitar del carrito</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
