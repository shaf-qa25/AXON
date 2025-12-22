import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' h-34 w-full bottom-0 left-0 bg-amber-600 p-14'>
            <div className='flex justify-between items-center'>
            <NavLink to="/">
                <div className='flex p-2.5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUkxxhrfhbqjukND_kB-RSl6r4QKAOpMidQ&s" alt="" className='w-14 h-1/3 object-contain' />
                    <h1 className='px-3'>AXON</h1>
                </div>
            </NavLink>

            <div className='flex flex-col items-center justify-center'>
                <div><NavLink>About Us</NavLink></div>
                <div><NavLink>Contact Us</NavLink></div>
            </div>
            </div>
        </footer>
    )
}

export default Footer