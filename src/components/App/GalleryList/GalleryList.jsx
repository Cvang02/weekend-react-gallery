function GalleryList ({galleryLists}) {
    return (
        <ul>
        {galleryLists.map(item => {
          return (
            <div key={item.id}>
            <img src="images/goat_small.jpg"/>
            <li>Desciption: {item.decription}</li>
            <li>Likes: {item.likes}</li>
            </div>
          )
        })}
      </ul>
    )
}

export default GalleryList;