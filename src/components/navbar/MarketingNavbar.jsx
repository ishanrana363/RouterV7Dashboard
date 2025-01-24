import React from 'react'
import { NavLink } from 'react-router'

const MarketingNavbar = () => {
    return (
        <div className=' w-7xl mx-auto ' >
            <div className='flex flex-row justify-between items-center ' >
                {/* logo */}
                <div>
                    <h1 className='font-bold text-4xl ' >LoGo</h1>
                </div>
                {/* navigation menu */}
                <div>
                    <nav>
                        <ul className='flex flex-row justify-center items-center gap-10 ' >
                            <li><NavLink to={"/"} >Home</NavLink></li>
                            <li><NavLink to={"/contact"} >Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
                {/* social media icons */}
                <div></div>
            </div>
        </div>
    )
}

export default MarketingNavbar
