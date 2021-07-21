import React from 'react'

const UserDetailsComponent = () => {
    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="border-2 border-gray-100 shadow-md rounded-full h-14 w-14 grid place-items-center"> <i className="fas fa-bell"></i> </div>
                <div className="border-2 border-gray-100 shadow-md rounded-full h-14 w-14 grid place-items-center"> <i className="fas fa-edit"></i> </div>
            </div>

            <div className="mt-7 grid place-items-center">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profileDisplay" className="h-32 w-32 rounded-full" />
                <h1 className="font-bold text-2xl pt-4">Lord Qaisi</h1>
            </div>

            <div className="mt-7 border-2 border-gray-100 shadow-md rounded-sm h-24 max-w-full grid place-items-center p-7 grid-cols-2 place-content-center">
                <div className="flex flex-row items-center space-x-3 p-2 pr-4 border-r-2 border-gray-100">
                    <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 place-items-center bg-blue-50 sm:grid md:hidden lg:grid">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="">
                        <h1 className="font-bold">218</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">products</p>
                    </div>
                </div>
                <div className="flex flex-row items-center space-x-3 p-2 pl-4">
                    <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 place-items-center bg-blue-50 sm:grid md:hidden lg:grid">
                        <i className="fas fa-users"></i>
                    </div>
                    <div>
                        <h1 className="font-bold">2,580</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">followers</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 space-y-3">
                <h1 className="font-bold text-lg">Reputation</h1>
                <div className="border-2 border-gray-100 shadow-md rounded-sm h-20 max-w-full flex flex-row space-x-3 items-center p-4 justify-items-center">
                    <div className="border-2 border-yellow-100 shadow rounded h-10 w-10 grid place-items-center bg-yellow-100">
                        <i className="fab fa-jedi-order text-yellow-500"></i>
                    </div>
                    <div className="w-full space-y-2">
                        <div className="flex flex-row justify-between font-bold">
                            <h1>Star seller</h1>
                            <h1>85%</h1>
                        </div>
                        <div className="relative mb-7 bg-gray-200 h-1 rounded">
                            <span className="absolute inset-0 bg-yellow-500 h-1 rounded-bl rounded-tl" style={{ width: "85%" }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 space-y-3 max-w-full">
                <div className="flex flex-row justify-between font-bold text-lg">
                    <h1 className="">Recent Orders</h1>
                    <h1 className="text-blue-400">See All</h1>
                </div>
                <div className="border-2 border-gray-100 shadow-md rounded-sm  max-w-full flex flex-col sm:px-4 md:px-0 lg:px-4 py-1 justify-items-center">
                   <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center space-x-3 p-2">
                            <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 grid place-items-center bg-blue-50">
                                <img src="https://toppng.com/uploads/preview/iphone-png-black-and-white-s-11545691331qkvchv75kk.png" alt="smartphone" />
                            </div>
                            <div className="">
                                <h1 className="font-bold">Redmi 4X</h1>
                                <p className="font-bold text-blue-900 opacity-30 text-xs">2 Minutes Ago</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-green-500 font-bold text-lg">+$80.00</h1>
                        </div>
                   </div>
                   
                   <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center space-x-3 p-2">
                            <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 grid place-items-center bg-blue-50">
                                <img src="https://img.lovepik.com/element/40142/2578.png_860.png" alt="headset" />
                            </div>
                            <div className="">
                                <h1 className="font-bold">Acer E1-421</h1>
                                <p className="font-bold text-blue-900 opacity-30 text-xs">2 Minutes Ago</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-green-500 font-bold text-lg">+$80.00</h1>
                        </div>
                   </div>

                   <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center space-x-3 p-2">
                            <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 grid place-items-center bg-blue-50">
                                <img src="https://www.vhv.rs/dpng/d/475-4750463_dslr-camera-png-image-nikon-d3500-dslr-transparent.png" alt="Nikon_D3500" />
                            </div>
                            <div className="">
                                <h1 className="font-bold">Nikon D3500</h1>
                                <p className="font-bold text-blue-900 opacity-30 text-xs">2 Minutes Ago</p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-green-500 font-bold text-lg">+$80.00</h1>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailsComponent
