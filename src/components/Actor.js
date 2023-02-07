import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Actor() {
const {actorId} = useParams();
const [data, setData] = useState();

const url=`https://imdb-api.com/API/Name/k_uy8055ru/${actorId}`
useEffect(() => {
async function fun1() {
    const response = await axios.get(url);
    console.log(response);
    setData(response.data)
}
fun1()
}, [url])

// integrate the API and save it in a state


  return (
    <div>
        <div className='actorCircle'>
            <img src={data?.image} alt='actor' />
        </div>
        <div className='actorDetails'>
            <h1>{data?.name}</h1>
            <h5>{data?.role}</h5>
            <p>{data?.summary}</p>
            <h2>{data?.awards}</h2>
        </div>
        <div className='actorMovies'>
            {
                data?.knownFor?.map((movie)=>(
            <div className='actorCard'>
                <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt='movie'/>
                <h3>{movie.title}</h3>
                </Link>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Actor