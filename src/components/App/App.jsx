import React, { useState, useEffect, } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './GalleryList/GalleryList.jsx';
import Header from '../Header/Header.jsx';
import AddToGallery from '../AddToGallery/AddToGallery.jsx'

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
        <Header />
        <AddToGallery fetchGallery={fetchGallery}/>
        <GalleryList galleryLists={gallery} fetchGallery={fetchGallery}/>
      </div>
    );
}

export default App;
