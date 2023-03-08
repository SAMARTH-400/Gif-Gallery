import React from 'react'

export default function Gifs({key, src, title}) {
    return (
        <div className='flex scale-[.85] w-[99%] h-5/6 bg-slate-100 p-5 rounded-2xl '>
            <div className='flex f-full w-full mx-auto'>
                <img src={src} className='rounded-2xl object-cover h-[90%] w-full ' />
                <h1 className='text-black text-mono font-medium  absolute bottom-5 left-10 truncate'>{title.substring(0, Math.min(40, title.length) )}</h1>
            </div>
        </div>
    )
}
