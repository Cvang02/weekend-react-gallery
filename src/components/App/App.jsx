import React, { useState, useEffect, } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './GalleryList/GalleryList';

function App() {

  useEffect(() => {
    fetchGallery();
  }, [])

  //THIS IS THE REACT STATE THAT IS IMPORTANT. 
  const [gallery, setGallery] = useState([]);

  // GET - ROUTE 
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((getRes) => {
      console.log('GET Route Successful:', getRes.data);
      setGallery(getRes.data);
    })
    .catch((getErr) => {
      console.log('GET Route Unsuccessful:', getErr);
    })
  } // END OF FETCHGALLERY FUNCTION. 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryLists={gallery} fetchGallery={fetchGallery}/>
      </div>
    );
}

export default App;
