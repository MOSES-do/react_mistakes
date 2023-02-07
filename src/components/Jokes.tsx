import React from 'react'
import useAxios from "../hooks/useAxios"
import axios from '../apis/dadJokes'

const Jokes = () => {
  const [joke, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url:'/',
    requestConfig:{
      headers:{
        'Content-Language': 'en-US'
      }
    }
  })
  return (
  
		<article className="main">
			<h1>Use Axios Hooks </h1>
			<h2>Random Dad Joke</h2>
			{loading && <p>Loading...</p>}
			{!loading && error && <p className="errMsg">{error}</p>}
			{!loading && !error && joke && <p>{joke?.joke}</p>}
			{!loading && !error && !joke && <p>No dad joke to display</p>}
     <button onClick={()=> refetch()}>Get Dad Jokes</button>
		</article>
	);
}

export default Jokes