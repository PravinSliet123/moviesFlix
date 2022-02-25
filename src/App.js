import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />

      <Row title = "TRENDING NOW" fetchUrl = {request.fetchTrending} 
        isLargeRow = {true}
      
      />
      <Row title = "NETFLIX ORIGINAL" fetchUrl = {request.fetchNetflixOriginals}/>
      <Row title = "HORROR MOVIES" fetchUrl = {request.fetchHorrorMovies} />
      <Row title = "COMEDY MOVIES" fetchUrl = {request.fetchComedyMovies} />
      <Row title = "ROMANCE MOVIES" fetchUrl = {request.fetchRomanceMovies} />
      <Row title = "DOCUMENTRY" fetchUrl = {request.fetchDocumentaries} />
    </div> 
  );
}

export default App;
