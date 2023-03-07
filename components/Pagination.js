import { useState } from 'react'

export default function Pagination({pageNo, changePageNo}) {
    return (
        <div className='pagination'>
            <div className='pageinationContainer font-mono'>
                <button className= {` pagecontrol ${ pageNo <=1 ? 'cursor-not-allowed' : '' }`}  onClick={()=>changePageNo( pageNo-1 )} disabled={pageNo===1}> Previous</button> 
                <div className='numcontainer bg-pink-300 border-b-4 border-pink-400 '><div className='pagenum'> {pageNo} </div></div>
                <div className='numcontainer'><div className='pagenum'> {pageNo + 1} </div></div>
                <div className='numcontainer'><div className='pagenum'> {pageNo + 2} </div></div>
                <button className='pagecontrol' onClick={()=>changePageNo( pageNo+1 )} > Next</button>
            </div>   
        </div>
    )
}
