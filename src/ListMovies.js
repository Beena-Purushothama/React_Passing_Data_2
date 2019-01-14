import React, {Component} from 'react';

class ListMovies extends Component{
  
  likedBy = (movieKey) => {
    const {users, movies, profiles} = this.props;
    const movieProfiles = profiles.filter(profile => (profile.favoriteMovieID === movieKey));
    if(movieProfiles && movieProfiles.length > 0){
      const listofItems  = movieProfiles.map((p) => (
      <li key={movieKey+p.userID}>
               {users[p.userID].name}
      </li>
      ));
      return (listofItems);
    }
     return (<li key={movieKey}> None of the current users liked this movie</li>);
  }


  render(){
    const {movies} = this.props;
    const movieKeys = Object.keys(movies);
  	return (
      		movieKeys.map((movieKey) => {
              return (<div>
                	  <h2>{movies[movieKey].name}</h2>
                      <p>Liked By:</p>
                      <ul>
                          {this.likedBy(movieKey)} 
                      </ul>
                      </div>
                      );
            })
    );
  }
}

export default ListMovies;