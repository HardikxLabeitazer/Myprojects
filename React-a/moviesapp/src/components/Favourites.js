import React, { Component } from "react";

import { movies } from "../movieData";

export class Favourites extends Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      currgenre: "All genres",
      movies: [],
      currText:""
    };
  }

  componentDidMount() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let data = JSON.parse(localStorage.getItem("movies-app") || "[]");
    let tempArr = [];
    data.map((movieObj) => {
      if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
        tempArr.push(genreids[movieObj.genre_ids[0]]);
      }
    });

    tempArr.unshift("All genres");

    this.setState({
      movies: [...data],
      genres: [...tempArr],
    });
  }

  handleGenreChange =(genre)=>{
         this.setState({
           currgenre : genre // action
         })
  }

  sortpopularityDesc=()=>{
    let temp = this.state.movies;
    temp.sort(function(objA,objB){
        return objB.popularity - objA.popularity;
    })
    this.setState({
        movies:temp
    })
  }
  sortpopularityasce=()=>{
    let temp = this.state.movies;
    temp.sort(function(objA,objB){
        return objA.popularity - objB.popularity;
    })
    this.setState({
        movies:temp
    })
  }
  sortRatingDesc=()=>{
    let temp = this.state.movies;
    temp.sort(function(objA,objB){
        return objB.vote_average - objA.vote_average;
    })
    this.setState({
        movies:temp
    })
  }
  sortRatingasce=()=>{
    let temp = this.state.movies;
    temp.sort(function(objA,objB){
        return objA.vote_average - objB.vote_average;
    })
    this.setState({
        movies:temp
    })
  }
  render() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };  
    let filterArr = []
    if(this.state.currText ===""){
        filterArr = this.state.movies;
    }
    else{
        filterArr=this.state.movies.filter((movieobj)=>{
            let title = movieobj.original_title.toLowerCase();
            return title.includes(this.state.currText.toLowerCase())
        })
    }
  

   if( this.state.currgenre!=='All genres'){
       filterArr = this.state.movies.filter((movieObj)=> genreids[movieObj.genre_ids[0]]=== this.state.currgenre)
    }

    return (
      <div className="main my-3">
        <div className="row">
          <div className="col-3">
            <ul className="list-group genre-selector">
              {this.state.genres.map((genre) =>
                this.state.currgenre === genre ? (
                  <li
                    style={{
                      background: "#3f51b5",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    className="list-group-item"
                  >
                    {genre}
                  </li>
                ) : (
                  <li style={{ color: "#3f51b5",cursor:'pointer' }} className="list-group-item"  onClick={()=>this.handleGenreChange(genre)}>
                    {genre}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-9 favourites-table">
            <div className="row">
              <input
                placeholder="Search"
                type="text"
                className="input-group-text col"
                onChange={(e)=>this.setState({currText:e.target.value})} value={this.state.currText}
              />
              <input type="number" className="input-group-text col" />
            </div>

            <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col"><i style ={{cursor:'pointer'}} class="fa-solid fa-sort-up" onClick={this.sortpopularityDesc}></i>Popularity<i style ={{cursor:'pointer'}} onClick={this.sortpopularityasce} class="fa-solid fa-sort-down"></i></th>
                    <th scope="col"><i style ={{cursor:'pointer'}} onClick={this.sortRatingDesc} class="fa-solid fa-sort-up"></i>Ratings<i class="fa-solid fa-sort-down" onClick={this.sortRatingasce} style ={{cursor:'pointer'}}></i></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filterArr.map((movieElem) => (
                    <tr>
                      <td>
                        <img
                          style={{ width: "6rem" }}
                          src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                        alt="" />
                      </td>
                      <th scope="row">{movieElem.title}</th>
                      <td>{genreids[movieElem.genre_ids[0]]}</td>
                      <td>{movieElem.popularity}</td>
                      <td>{movieElem.vote_average}</td>
                      <td>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;