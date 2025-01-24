import React from 'react'
import { NavLink } from 'react-router'

const AdminNavbar = () => {
    return (
        <div className=' w-64  flex flex-col top-0 overflow-y-scroll  ' >
            <div>
                <h1>LoGo</h1>
            </div>
            <div>
                <nav>
                    <ul className='mt-10 p-10' >
                        <li> <NavLink to={"/dashboard"} >Home</NavLink> </li>
                        <li> <NavLink to={"/dashboard/contact"} >Contact</NavLink> </li>
                        <li> <NavLink to={"/dashboard/about"} >About</NavLink> </li>
                        <li> <NavLink to={"/dashboard/skill"} >Skill</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AdminNavbar
