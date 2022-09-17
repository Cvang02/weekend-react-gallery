import axios from 'axios'

function GalleryItem ({galleryItem, fetchGallery}) {

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
        <div>
            <img src="images/goat_small.jpg"/>
            <p>Desciption: {galleryItem.description}</p>
            <button onClick={galleryDescription}>❤️</button> = {galleryItem.likes}
        </div>
    )
}

export default GalleryItem;