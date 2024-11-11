import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY} from '../constants/constants'
import './banner.css'
import axios from '../axios'

export default function Banner() {
  const [movie, setMovie]=useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
console.log(response.data.results[0]);
  setMovie(response.data.results[0])
})
.catch((err)=>{
  console.error(err);
  
})
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>Mylist</button>
            </div>
            <h1 className='discriprtion'> {movie ? movie.overview:""}</h1>
        </div>
<div className="fade_bottom">

</div>
    </div>
  )
}
