import React, { useEffect, useState, useRef, useLayoutEffect} from 'react'


const useCallbackRef=(callback)=> { 
    useLayoutEffect(()=>{
        const callbackRef=useRef(callback);

        callbackRef.current=callback

    }, [callback])
    return callback
}

const Usefetch = (options) => {
    const [data, setData]=useState(null)
    const savedOnSuccess=useCallbackRef(options.onSuccess);

  


    useEffect(()=>{
        console.log("usefetch useEffect")
        if(options.url) {
        let isCancelled=false;   
        fetch(options.url)
        .then((res)=>res.json())
        .then((json)=> { 
            if(!isCancelled){
            savedOnSuccess.current?.(json);
            setData(json)
        }
        });
        return ()=> { 
            isCancelled=true
        }
         }
    }
    , [options.url])


  return  {
    data,
};
}

export default Usefetch