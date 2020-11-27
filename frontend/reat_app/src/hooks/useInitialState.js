import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setApiData(data))
    }, [])
    return apiData
}

export default useInitialState