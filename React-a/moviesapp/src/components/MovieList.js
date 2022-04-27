import React, { Component } from 'react'

import { movies } from '../movieData'
export class MovieList extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1]
    }
  }
  render() {
    let moviesarr = movies.results;
    return (
      <>
        <div>
          <h3 className='text-center'><strong>Trending</strong></h3>
        </div>
        <div className='movies-list'>
          {
            moviesarr.map((movieEle) => (
              <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave={()=>this.setState({hover:""})}>
                {/* <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." /> */}
                <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />

                <h5 className="card-title movie-title">{movieEle.title}</h5>
                <div className='button-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    this.state.hover ===movieEle.id &&
                     <a href="/" className="btn btn-primary movies-button text-center">Add to Favourites</a>
                  }
                 

                </div>


              </div>
            ))
          }
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
           <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="/">Previous</a></li>
            {
              this.state.parr.map((value)=>(
                <li className="page-item"><a className="page-link" href="/">{value}</a></li>
              ))
            }
            
            <li className="page-item"><a className="page-link" href="/">Next</a></li>
          </ul>
        </nav>
        </div>
       
      </>
    )
  }
}

export default MovieList