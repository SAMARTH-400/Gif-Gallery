import React from 'react'

export default function Gifs({key, src, title}) {
    let n = Math.max(30, title.length);
    return (
        <div className='flex scale-[.85] w-[99%] h-5/6 bg-slate-100 p-5 rounded-2xl '>
            <div className='flex f-full w-full mx-auto'>
                <img src={src} className='rounded-2xl object-cover h-[90%] w-full ' />
                <h1 className='text-black text-mono font-medium  absolute bottom-5 left-10'>{title.substring(0,n)}</h1>
            </div>
        </div>
    )
}
