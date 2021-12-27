import { useEffect, useState} from 'react';

const useFetch=(url)=>{
    const [ data, setData] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState('')
        useEffect(()=>{
            setTimeout(()=>{
                fetch(url)
                .then((res)=>{
                  if(!res.ok){
                    throw Error("Resource cannot be loaded from the server")
                  }
                  return res.json()
                })
                .then((data)=>{
                  setData(data)
                  setLoading(false)
                })
                .catch((error)=>{
                  setError(error.message)
                })
            },1000)
        })

          return {data, loading, error}       
    
}

export default useFetch;