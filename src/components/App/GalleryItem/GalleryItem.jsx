import axios from 'axios'
import { useState } from 'react';

function GalleryItem ({galleryItem, fetchGallery}) {

    const [isPictureClicked, setisPictureClicked] = useState(true);
    
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
    }

    return (
        <div className='galleryItems'>
            <img src={galleryItem.path} onClick={() => setisPictureClicked(!isPictureClicked)}/>
            {!isPictureClicked && galleryItem.description}
            <br></br>
            <br></br>
            <button onClick={galleryDescription}>❤️</button>
            <p>{galleryItem.likes} people love this!</p>
        </div>
    )
}

export default GalleryItem;