import React from 'react'
import UserDetailsComponent from './UserDetailsComponent'

const UserDetails = () => {
    return (
        <div className="hidden md:block h-full col-span-2 sm:p-3 md:p-1 lg:p-3 pt-5 text-blue-900">
            <UserDetailsComponent />
        </div>
    )
}

export default UserDetails
