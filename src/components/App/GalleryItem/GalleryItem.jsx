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

    const switchDisplay = () => {
        setisPictureClicked(!isPictureClicked)
    }

    return (
        
        <div className='galleryItems'>
            <img className='Images' src={galleryItem.path} onClick={switchDisplay} hidden={!isPictureClicked}/>
            <div onClick={switchDisplay}> {!isPictureClicked ? galleryItem.description : null} </div>
            <br></br>
            <p>{galleryItem.likes} people love this!</p>
            <button className='likeButton' onClick={galleryDescription}>❤️</button>
            {/* <button>🦖</button> */}
            <button className='removeButton' onClick={removeItem}>🗑</button>
        </div>
    );
}

export default GalleryItem;