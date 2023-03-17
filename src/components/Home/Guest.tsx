import Link from 'next/link'
import React from 'react'

const Guest = () => {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold">Guest HomePage</h3>

            <div className="flex justify-center">
                <Link href={'/login'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</Link>
            </div>
        </main>
    )
}

export default Guest