
function GalleryItem ({galleryItem, fetchGallery}) {
    return (
        <div>
            <img src="images/goat_small.jpg"/>
            <p>Desciption: {galleryItem.decription}</p>
            <p>Likes: {galleryItem.likes}</p>
        </div>
    )
}

export default GalleryItem;