import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; 


const GENERIC_MOVIE_TITLE = "New Movie Title", GENERIC_MOVIE_DESC = "New Movie Description", GENERIC_MOVIE_YEAR = "New Movie Year", GENERIC_MOVIE_GENRE = "New Movie Genre";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.descriptionContent = React.createRef();
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
   
    this.state = {
      title: GENERIC_MOVIE_TITLE ,
      description: GENERIC_MOVIE_DESC,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_GENRE,
      editMode: false
    };
  }
  
  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      description: this.descriptionContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      editMode: false
    });
    
  }

  
  handleDelete(){
    this.props.deleteHandler(this.props.id);
  }

render() {

    let titleElement, descriptionElement, yearElement, genreElement, buttonArea; 
    if (this.state.editMode){
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      descriptionElement = <textarea ref={this.descriptionContent} className="description-textarea" defaultValue={this.state.description}></textarea>;
      yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
      genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
    else{
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      descriptionElement = <p>{this.state.description}</p>; 
      yearElement = <p>{this.state.year}</p>;
      genreElement = <p>{this.state.genre}</p>;
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
    }
    
    return (
      <div className="card-group col-sm-4">
        <div className="card card-view mt-3">        
          <div className="card-body">
            {titleElement}
            {descriptionElement}
            {yearElement}
            { genreElement}
            {buttonArea}
           {/*  <h5 className="card-title h-10">{this.props.title}</h5> 
            <p ClassName="card-text h-40">{this.props.description}</p> 
            <ul class="list-group list-group-flush">
               <li class="list-group-item h-10">Year: {this.props.year}</li>
               <li class="list-group-item h-10">{this.props.genre}</li>
            </ul>
            
            <div class="card-body h-10">
              <button className="btn btn-info mr-1 p-1">Edit</button>
              <button className="btn btn-danger mr-1 p-1">Delete</button>
              <button className="btn btn-primary p-1">Preview</button>
            </div>          */}
          </div>
        </div>
      </div>
    );
  }
}

Movie.defaultProps = {
  title: "A Cool Title",
  description: "A Cool movie",
  year: "2023",
  genre: "fiction"
};

Movie.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string
};

export default Movie;

