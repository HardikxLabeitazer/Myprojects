import React, { Component } from 'react'
import axios from 'axios';
import { movies } from '../movieData';
// import { movies } from '../movieData'
export class MovieList extends Component {
  constructor(){
    super();
    this.state={
      hover:"",
      parr: [1],
      movies: [],
      currpage:1,
      favourites:[]
    }
  }
  async componentDidMount(){
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=751869da0233365cc4d5e850a346b82e&language=en-US&page=${this.state.currpage}`);
      let movieData = res.data;
      this.setState({
        movies:[...movieData.results]
      })
  }
  changeMovies = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=751869da0233365cc4d5e850a346b82e&language=en-US&page=${this.state.currpage}`);
    let movieData = res.data;
    this.setState({
      movies:[...movieData.results]
    })
  }
  handlenext=()=>{
    let temparr = [];
    for(let i =1;i<=this.state.parr.length+1 ;i++){
      temparr.push(i);
    }
      this.setState({
        parr:[...temparr],
        currpage:this.state.currpage+1,
      },this.changeMovies)
      
  }
  handleprevious=()=>{
    if(this.state.currpage !== 1){
      this.setState({
        currpage:this.state.currpage-1
      },this.changeMovies)
    }
  }
  handlepageclick =(value)=>{
    if(value !== this.state.currpage){
      this.setState({
        currpage:value
      },this.changeMovies)
    }
  }
  handleFavourites=(movie)=>{

    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]');
    if(this.state.favourites.includes(movie.id)){
      oldData = oldData.filter((m)=> m.id !== movie.id)
    }
    else{
      oldData.push(movie);
    }
    localStorage.setItem("movies-app",JSON.stringify(oldData))
    console.log(oldData)

    this.handleFavouritesState()
  }
  handleFavouritesState=()=>{
    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]');
    let temp = oldData.map((movie)=> movie.id);
    this.setState({
      favourites:[...temp]
    })

  }
  render() {
    
    return (
      <>
        <div className='my-5 movieheader' >
          <h2 className='text-center my-5'><strong>Trending</strong></h2>
        </div>
        <div className='movies-list'>
          {
            this.state.movies.map((movieEle) => (
              <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave={()=>this.setState({hover:""})}>
                {/* <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." /> */}
                <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />

                <h5 className="card-title movie-title">{movieEle.title}</h5>
                <div className='button-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    this.state.hover ===movieEle.id &&
                     <a  className="btn btn-primary movies-button text-center" onClick={()=>(this.handleFavourites(movieEle))}>
                       {this.state.favourites.includes(movieEle.id)? "Remove from Favourites":"Add to Favourites"}
                      
                       </a>
                  }
                 

                </div>


              </div>
            ))
          }
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
           <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={this.handleprevious}>Previous</a></li>
            {
              this.state.parr.map((value)=>(
                <li className="page-item"><a className="page-link" onClick={()=>this.handlepageclick(value)}>{value}</a></li>
              ))
            }
            
            <li className="page-item"><a className="page-link" onClick={this.handlenext} >Next</a></li>
          </ul>
        </nav>
        </div>
       
      </>
    )
  }
}

export default MovieList