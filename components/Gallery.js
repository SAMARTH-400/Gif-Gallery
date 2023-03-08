/* eslint-disable react-hooks/exhaustive-deps */
import { useState , useEffect , useCallback } from 'react'
import axios from 'axios';
import Image from 'next/image';
import Pagination from './Pagination';
import Loader from './Loader';
import Gifs from './Gifs';

export default function Gallery() {
    const [input, setInput] = useState("");
    const [pageNo, setPageNo] = useState(1);
    const [apidata, setApidata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    const debounceValue = useDebounceValue(input);
    function useDebounceValue(value){
        const [debounceValue, setDebounceValue ] = useState(value) ;
        useEffect ( () => {
            const timeout = setTimeout ( () => {
                setDebounceValue (value) ;
            },700)
            return() => clearTimeout (timeout) ;
        }, [value] );
        return debounceValue;
    }
    useEffect( () => {
        getGifs();
    }, [debounceValue, pageNo] );    
    
    const getGifs = async() => {
        if(debounceValue.length==0){
            setApidata([]);
            return;
        }
        try{
            setIsLoading(true);
            const results = await axios(`${process.env.NEXT_PUBLIC_URL}`, {
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    q: debounceValue,
                    limit: 3,
                    offset: pageNo*3
                }
            }).then(setIsLoading(true));
            setApidata(results.data.data);
        }catch(error){console.log(error);}
        setIsLoading(false);
    }

    function changePageNo(p){
        setPageNo(p);
    }
    const renderGifs = () => {
        if (isLoading) {
            return <Loader />;
        }
        return apidata.map( el => {
            return (
                <Gifs key={el.id} src={el.images.fixed_height.url} title={el.title}/>
            );
        });
    };
    return (
        <div className='h-screen w-full bg-gray-100'>
            <div className={`searchcontainer scale-110 rounded-t-[20px] ${input==="" && 'rounded-b-[20px]' } `}>   
                <div class="absolute inset-y-0 left-10 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <div className='searchbox text-black outline-none'> 
                    <input className='h-[30px] w-full bg-transparent ml-10 outline-none' value={input} onChange={ e => { e.preventDefault; setInput(e.target.value) } }></input>
                </div>
                <button type="button" className='searchbutton text-lg font-medium hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 ' onClick={getGifs} > Search </button>
            </div>
            <div className= {`flex gifcontainer scale-110 ${input==="" && 'invisible' }`} >
                <div className='flex justify-even'>
                    {renderGifs()}
                </div>
                <Pagination pageNo={pageNo} changePageNo={changePageNo}/>
            </div>
            
        </div>
    )
}
