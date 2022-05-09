import React, { Component } from 'react'

import {movies} from '../movieData';
export class Banner extends Component {
  render() {
    let movieEle  = movies.results[Math.floor((Math.random()*10)+1)];
    let background = movieEle.backdrop_path;
    return (
      <div className="card banner-card" >
        {/* <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" className="card-img-top banner-img" alt="..." /> */}
        <img src={`https://image.tmdb.org/t/p/original${background}`} className="card-img-top banner-img" alt="..." />
        <h5 className="card-title banner-title">{movieEle.title}</h5>
        <p style={{fontSize:'25px'}} className="card-text banner-text">{movieEle.overview} </p>


      </div>
    )
  }
}

export default Banner