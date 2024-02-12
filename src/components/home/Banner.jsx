import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

function Banner() {
    const [movies, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(AppURL.NetflixOriginals);
            
           setMovie(
            request.data.results[
                Math.floor(Math.Random * request.data.results.lenght)
                ]
           )
           return request;
        }
        fetchData();
    }, [])
  return (
    <header>
      {/* title */}

      {/* div > 2 buttons */}

      {/* description */}
    </header>
  )
}

export default Banner
