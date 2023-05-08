import { useState , useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '620d7ab28dmsh742a34c2c314b81p18fe28jsnfa98f464b5eb',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
    
          setData(response.data.data);
          console.log(data);

          setIsLoading(false);
        } catch (error) {
          setError(error);
          (error)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
      return { data, isLoading, error, refetch };
}

export default useFetch