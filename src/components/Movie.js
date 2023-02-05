import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Movie() {
    const {movieId} =useParams();
    // console.log(movieId);
const [data, setData] = useState();
    //  store it in a state
    const url=`https://imdb-api.com/en/API/Title/k_uy8055ru/${movieId}`;
    useEffect(() => {
      async function fun1() {
            const result = await axios.get(url)
            // console.log(result);
            setData(result.data)
        }
        fun1();
    }, [url]);
    
  return (
    <div>
        <div className='coverImg'>
            <img className='coverMainImg' />
        </div>
        <div className='MovieBody'>
                <div className='MovieContainer'>
                    <div className='MovieRating'>
                        <img src={null} />
                        <p>
                            <span>imdbRating</span>/10
                        </p>
                    </div>
                    <div className='movieDescription'>
                        <h1>title</h1>
                        <p>year</p>
                        <p>genre</p>
                        <p>desc</p>
                    </div>
                </div>
                <div className='cast'>
                    <div className='castHeading'>
                        <h1>Cast</h1>
                        <p>Cast overview, first billed only</p>
                    </div>
                    <div className='castName'>
                        <div>
                            <Link className='actorLink' to='/'>
                                <div className='castActors'>
                                    <div className='castCircle'>
                                        <img className='cardImg' />
                                    </div>
                                    <div className='castActorName'>
                                        <h2>actor name</h2>
                                        <p>charater</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Movie