import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Movie() {
    const {movieId} =useParams();
    // console.log(movieId);
const [data, setData] = useState();
const [trailer, setTrailer] = useState();
    //  store it in a state
    const url=`https://imdb-api.com/en/API/Title/k_uy8055ru/${movieId}`;

const url2 =`https://imdb-api.com/en/API/Trailer/k_uy8055ru/${movieId}`


    useEffect(() => {
      async function fun1() {
            const result = await axios.get(url)
            console.log(result);
            setData(result.data)
        }
        fun1();
    }, [url]);

    useEffect(() => {
        async function fun1() {
              const result = await axios.get(url2);
              setTrailer(result.data)
          }
          fun1();
      }, [url2]);
    
  return (
    <div>
        <div className='coverImg'>
            <img src={trailer?.thumbnailUrl} alt='cover'  className='coverMainImg' />
        </div>
        <div className='movieBody'>
                <div className='movieContainer'>
                    <div className='movieRating'>
                        <img src={data?.image} alt='displayimg' />
                        <p>
                            <span>{data?.imDbRating}</span>/10
                        </p>
                    </div>
                    <div className='movieDescription'>
                        <h1>{data?.title}</h1>
                        <p>{data?.year}</p>
                        <p>{data?.genres}</p>
                        <p>{data?.plot}</p>
                    </div>
                </div>
                <div className='cast'>
                    <div className='castHeading'>
                        <h1>Cast</h1>
                        <p>Cast overview, first billed only</p>
                    </div>
                    <div className='castName'>
                        {
                            data?.actorList?.map((actor)=>(
                        <div>
                            <Link className='actorLink' to={`/actor/${actor.id}`}>
                                <div className='castActors'>
                                    <div className='castCircle'>
                                        <img alt='actorimg' src={actor?.image} className='cardImg' />
                                    </div>
                                    <div className='castActorName'>
                                        <h2>{actor?.name}</h2>
                                        <p>{actor?.asCharacter}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Movie