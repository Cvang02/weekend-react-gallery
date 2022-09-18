import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryLists, fetchGallery}) {
  
    return (
        <ul>
        {galleryLists.map(item => {
          return (
            <GalleryItem key={item.id} galleryItem={item} fetchGallery={fetchGallery} />
          )
        })}
      </ul>
    )
}

export default GalleryList;