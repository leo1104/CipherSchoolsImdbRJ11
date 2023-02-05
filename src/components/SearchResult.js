
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchResult() {
    const {movie} = useParams();
    const [data, setData] = useState();

const url=`https://imdb-api.com/en/API/Search/k_uy8055ru/${movie}`

useEffect(() => {
  async function fun1() {
    const res = await axios.get(url)
    console.log(res.data.results);
    setData(res.data.results)
  }
  fun1()

}, [url])


  return (
    <div className='movieCards'>
      {data?.map((movie)=>{
        return(
        <div className='movieCard'>
                <Link className='searchLink' to={`/movie/${movie.id}`}>
                <img alt='img' src={movie.image} className='searchImg' />
                <h2 className='searchTitle'>{movie.title}</h2>
                </Link>
        </div>
        )
      })}
        
    </div>
  )
}



export default SearchResult