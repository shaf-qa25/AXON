import React from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from 'lucide-react';


const Header = () => {
    return (
        <header className=' fixed w-full h-auto bg-yellow-400'>
            <div className='flex items-center justify-between'>
                <NavLink to="/">
                    <div className='flex p-2.5'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUkxxhrfhbqjukND_kB-RSl6r4QKAOpMidQ&s" alt="" className='w-14 h-1/3 object-contain' />
                        <h1 className='px-3'>AXON</h1>
                    </div>
                </NavLink>
                <div className='flex items-center gap-4'>
                <div className=' flex  items-center justify-between  border-gray-800 box-border border rounded-xl p-1'>
                    <input type="search" placeholder='Type something'/>
                    <Search/>
                    
                </div>
                <NavLink to="/login">
                    <button className='px-5'>Login</button>
                </NavLink>
                <NavLink to="/register">
                    <button className='px-6'>Register</button>
                </NavLink>
                
                </div>
            </div>
        </header>
    )
}

export default Header