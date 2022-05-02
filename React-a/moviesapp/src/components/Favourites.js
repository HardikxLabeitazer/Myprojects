import React, { Component } from 'react'
import { movies } from '../movieData'
export class Favourites extends Component {
   constructor(){
       super();
       this.state={
           genres:[]
       }
   }
    render() {
        const moviearr = movies.results;
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        
        let temparr = [];

        moviearr.map((moviesobj)=>{
            if(!temparr.includes(genreids[moviesobj.genre_ids[0]])){
                temparr.push(genreids[moviesobj.genre_ids[0]])
            }
        })
        temparr.unshift('All Genres');
        return (
            <div className='main'>
                <div className='row'>
                    <div className='col-3'>
                        <ul className="list-group genre-selector">
                           
                            {
                                temparr.map((genres)=>(
                                    <li className="list-group-item">{genres}</li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-9 favourites-table'>
                        <div className='row'>
                            <input type="text" className='input-group-text col' />
                            <input type="number" className='input-group-text col' />
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Movie</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Ratings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    moviearr.map((movieele)=>(
                                        <tr>
                                            <td className='title-image'><img alt="" style={{width:'120px'}}src={`https://image.tmdb.org/t/p/original${movieele.backdrop_path} `}/></td>
                                            <th scope="row">{movieele.title}</th>
                                            <td>{genreids[movieele.genre_ids[0]]}</td>
                                            <td >{(movieele.popularity/100).toPrecision(2)}%</td>
                                            <td >{movieele.vote_average}</td>
                                            <td><button type="button" className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>



                </div>

            </div>
        )
    }
}

export default Favourites