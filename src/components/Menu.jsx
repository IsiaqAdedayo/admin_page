import React from 'react'
import Footer from './Footer'
import MenuComponents from './MenuComponents'

const Menu = () => {
    return (
        <div className="hidden lg:block min-h-full col-span-1 text-blue-700 space-y-10 pl-3 border-r-4 border-gray-100">
            <MenuComponents />

            <Footer />
        </div>
    )
}

export default Menu
