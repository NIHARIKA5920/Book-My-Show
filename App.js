import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider';
import Premiers from './components/Premiers';
import Footer from './components/Footer/Footer';
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';
// import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  
      <Router>
          <div>
    <Header />
    <Switch>
    <Route exact path="/">{/*If the path is this it is applicable for included sliders slider images,card sliders*/ }
          <SliderImages />
            <CardSlider/>
            <Premiers />
            </Route>
          {/*If the path is this (movies) it is applicable for included sliders which is premiers nd exact used for avoid confuction like if /movies is there frst it takes the slides of / not movies becoz it is present at the frst /*/ }
          <Route exact path="/movies">
            <AllMovies/>
            {/* <AllMoviesFetch /> */}
          </Route>
           <Route exact path="/movies/:movid">
             <SingleMovie />
          {/* <SingleMovieFetch /> */}
          </Route> 
          <Route exact path="/register">
          <Registration />
          </Route> 
        </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
// {/*header nd footer is outside the swith becoz header nd footer is common for all pages*/}
