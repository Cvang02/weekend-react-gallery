import React, { useState, useEffect, } from 'react';
import './App.css';
import axios from 'axios';

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
      url: '/gallery'       // '/gallery', gallery' TRY THIS IF URL DON'T WORK.
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
        {/* <img src="images/goat_small.jpg"/> */}
        <ul>
          {gallery.map(item => {
            return (
              <div key={item.id}>
              <img src="images/goat_small.jpg"/>
              <li>Desciption: {item.decription}</li>
              <li>Likes: {item.likes}</li>
              </div>
            )
          })}
        </ul>
      </div>
    );
}

export default App;
