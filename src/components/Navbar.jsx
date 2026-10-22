import React from 'react'

import { useContext, useState } from 'react'
import { CartContext } from '../contex/CartContex'
import { useNavigate } from 'react-router'
import { Drawer } from './Drawer'

export const Navbar = () => {
  const navigate = useNavigate();
  const {productCart} = useContext(CartContext);
  const [open, setOpen] = useState(false);
  return (
    <div className=' flex justify-center w-screen bg-blue-800 text-white'>
        <ul className=' list-none flex gap-4 font-bold cursor-pointer'>

            <li><a onClick={() => navigate('/')}> catalogo</a></li>
            <li><a onClick={() => setOpen(true)}> carrito ({productCart.length})</a></li>

        </ul>
        <Drawer open={open} setOpen={setOpen}></Drawer>
    </div>
  )
}
