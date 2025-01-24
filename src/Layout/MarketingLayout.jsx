import React from 'react'
import MarketingNavbar from '../components/navbar/MarketingNavbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router'

const MarketingLayout = () => {
    return (
        <div>
            <MarketingNavbar></MarketingNavbar>
            <Outlet></Outlet>
            <div className='h-screen' >
                <Footer></Footer>
            </div>
        </div>
    )
}

export default MarketingLayout
