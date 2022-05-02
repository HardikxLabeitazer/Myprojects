
import './App.css';
import Banner from './components/Banner';
import Favourites from './components/Favourites';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
     <NavBar/>
     {/* <Banner/>
     <MovieList/> */}
     <Favourites/>
    </>
  );
}

export default App;
