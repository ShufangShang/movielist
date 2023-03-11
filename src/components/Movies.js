import React, {Component} from 'react';
import '../css/Movies.css';
import Movie from './Movie';

class MovieCollection extends Component {
  constructor() {
    super();
    this.state =
    {
        movies: []
        /* movies: [
          {title: "Hard Boiled", decription: "Hard Boiled is a 1992 Hong Kong action thriller film.", year: "1992", genre: "Action"},
          {title: "he Flight of Dragons", decription: "The Flight of Dragons is animated fantasy film.", year: "1982", genre: "Animation"},
          {title: "Charlie’s Angels", decription: "A team of female private agents, popularly known as Charlie’s Angels.", year: "2000", genre: "Comedy"}, 
          {title: "Ocean’s Eleven", decription: "Danny Ocean, a gangster, assembles a group of eleven people in an effort to steal money from three popular casinos.", year: "2001", genre: "Fantasy"},
          {title: "Movie 5", decription: "Movie 5 description.", year: "2005", genre: "Fantasy"},
          {title: "Movie 6", decription: "Movie 6 description.", year: "2020", genre: "Fantasy"}   
              
        ]     */ 
    };

  }

  // MoviesCollection.js MoviesCollection Component Class Function

  addMovie() {
    this.state.movies.push(
      {
        id: Date.now()
        /* title: "New Movie Title",
        description: "New Movie Description",
        year: "New Movie year",
        gener: "New Movie Genre" */
      }
    );
    this.setState(
      {
        movies: this.state.movies
      }
    );
  }

  deleteMovie(id){
    let newMovieArr = this.state.movies;
    newMovieArr.map((movie, index) => {
      if (id === movie.id) {
        newMovieArr.splice(index,1);
      }
    });
    this.setState(
      {
        movies: newMovieArr
      }
    );
  }


  render() {
    return (
      <div>
        <div className="div-movies">
          <div className="row">
            {
              this.state.movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />
              })
               /* this.state.movies.map(movie => {
                return <Movie title={movie.title} decription={movie.description} year={movie.year} gener={movie.genre}/>
              }) */
            }
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addMovie.bind(this)}>Add</button>
        </div>
      </div>
    );
  } 
  
} 

export default MovieCollection;