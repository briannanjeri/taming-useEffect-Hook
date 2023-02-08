import React, { useState, useMemo, useEffect } from 'react';
import Usefetch from './Usefetch';

const useStopWatch=()=>{
  const [count, setCount]=useState(0)

  useEffect(()=>{
    console.log("useStopWatch useEffect")
    const interval=setInterval(()=>
    {
      console.log(`count:${ count}`)
    setCount((prev)=>prev+1)
  },1000);
    
    return ()=>clearInterval(interval)
  },[])

}




const App = () => {
  const [url, setUrl]=useState(null);
  const count=useStopWatch();
  const {data}=Usefetch({url, onSuccess:()=>console.log('success')
  });

  console.log("App rendering")

  return (
    <div className='App'>
    <div>hello</div>
    <div>count:{ count}</div>
    <div>{JSON.stringify(data)}</div>
    
    <div>
      <button onClick={()=>setUrl("/jack.json")}>jack</button>
      <button onClick={()=>setUrl("/sally.json")}>sally</button>

    </div>

    </div>
  )
}

export default App
