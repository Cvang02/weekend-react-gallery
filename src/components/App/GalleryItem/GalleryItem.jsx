import axios from 'axios'
import { useState } from 'react';

function GalleryItem ({galleryItem, fetchGallery}) {

    //THIS IS THE REACT STATE THAT IS IMPORTANT.
    const [isPictureClicked, setisPictureClicked] = useState(true);
    
    // PUT ROUTE 
    const galleryDescription = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryItem.id}`
        })
        .then((putRes) => {
            console.log('PUT Route Successful', putRes);
            fetchGallery();
    })
        .catch((putErr) => {
            console.log('PUT Route Unsuccessful', putErr);
        })
    } // END OF PUT ROUTE.

    // DELETE ROUTE
    const removeItem = () => {
        axios({
            method: 'DELETE',
            url: `/gallery/${galleryItem.id}`
        })
        .then((delRes) => {
            console.log('DELETE Route Successful', delRes);
            fetchGallery();
        })
        .catch ((delErr) => {
            console.log('DELETE Route Unsuccessful', delErr);
        });    
    }// END OF DELETE ROUTE.

    return (
        
        <div className='galleryItems'>
            <img src={galleryItem.path} onClick={() => setisPictureClicked(!isPictureClicked)}/>
            {!isPictureClicked && galleryItem.description}
            <br></br>
            <br></br>
            <p>{galleryItem.likes} people love this!</p>
            <button onClick={galleryDescription}>❤️</button>
            <button onClick={removeItem}>🗑</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default GalleryItem;