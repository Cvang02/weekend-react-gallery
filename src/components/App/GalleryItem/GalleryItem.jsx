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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
        .then((delRes) => {
            if (delRes.isConfirmed) {
        axios({
            method: 'DELETE',
            url: `/gallery/${galleryItem.id}`
        })
        
        Swal.fire(
            'Deleted!',
            'Your Gallery Post has been deleted.',
            'success'
        )
        console.log('DELETE Route Successful', delRes);
        } else {
            Swal.fire(
                'Your Post Gallery is Safe.',
            )}

        fetchGallery();

        })
        .catch ((delErr) => {
            console.log('DELETE Route Unsuccessful', delErr);
        });    
    }// END OF DELETE ROUTE.

    const switchDisplay = () => {
        setisPictureClicked(!isPictureClicked)
    }

    const dinoClick = () => {
        Swal.fire({
            title: 'You Clicked on the FUN Button!!!',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url(/images/DuPN.gif)
              repeat
            `
        })
    }

    return (
        
        <div className='galleryItems'>
            <img className='Images' src={galleryItem.path} onClick={switchDisplay} hidden={!isPictureClicked}/>
            <div onClick={switchDisplay}> {!isPictureClicked ? galleryItem.description : null} </div>
            <br></br>
            <p>{galleryItem.likes} people love this!</p>
            <button className='likeButton' onClick={galleryDescription}>❤️</button>
            <button onClick={dinoClick}>🦖</button>
            <button className='removeButton' onClick={removeItem}>🗑</button>
        </div>
    );
}

export default GalleryItem;