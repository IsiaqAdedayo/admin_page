import React from 'react'

const MenuComponents = () => {
    return (
        <div className="space-y-10">
             <div className="flex flex-row items-center space-x-3">
                <i className="fab fa-gg-circle fa-3x"></i>
                <h1 className="text-2xl font-bold">Tumbas</h1>
            </div>

            <div className="space-y-5">
                <h1 className="text-xl font-bold text-blue-900">Menu</h1>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 rounded border-blue-900 cursor-pointer">
                    <i className="fas fa-th-large"></i>
                    <h1>Overview</h1>
                </div>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 border-white rounded hover:border-blue-900 cursor-pointer">
                    <i className="fas fa-file-alt"></i>
                    <h1>Orders</h1>
                </div>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 border-white rounded hover:border-blue-900 cursor-pointer">
                    <i className="fas fa-shopping-bag"></i>
                    <h1>Products</h1>
                </div>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 border-white rounded hover:border-blue-900 cursor-pointer">
                    <i className="fas fa-cog"></i>
                    <h1>Settings</h1>
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-xl font-bold text-blue-900">Business</h1>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 border-white rounded hover:border-blue-900 cursor-pointer">
                    <i className="fas fa-location-arrow"></i>
                    <h1>Shipment</h1>
                </div>
                <div className="flex flex-row items-center space-x-5 font-bold text-blue-500 border-r-4 border-white rounded hover:border-blue-900 cursor-pointer">
                    <i className="fas fa-users"></i>
                    <h1>Employee</h1>
                </div>
            </div>
        </div>
    )
}

export default MenuComponents
