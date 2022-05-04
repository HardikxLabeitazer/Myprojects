import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <div style={{display:'flex',backgroundColor:'black',position:'fixed',width:'100%',zIndex:'1',top:'0'}}>
        <Link to="/" style={{textDecoration:'none',color:'white'}} > <h1>Movies App</h1></Link>
        <Link to="/favourites" style={{textDecoration:'none',color:'white'}}>  <h2 style={{marginLeft: '2rem' , marginTop:'0.5rem'}}  to="/favourites" >Favourites</h2></Link>
             
           
             
      </div>
    )
  }
}

export default NavBar

