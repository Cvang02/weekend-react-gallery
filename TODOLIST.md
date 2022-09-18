##### INITIAL SET-UP ✅

[✅] - ADD NEW IMAGES TO PUBLIC/IMAGES FOLDER
[✅] - ADD DATA OF IMAGES TO OUT DATABASE SERVER IN SERVER/MODULES/GALLERY.DATA.JS
[✅] - CREATE GALLERYLIST AND GALLERYITEM COMPONENTS. 

##### BASE-MODE GOALS ✅

✅ CREATE A GALLERY WITH PICTURES.
✅ CLICKED ON IMAGES WILL LET USERS SEE A TEXT DESCRIPTION OF PHOTO.
✅ THERE IS AN BUTTON TO CLICK 'LIKE' ON EACH IMAGES. 
✅ A NUMBER OF LIKES WILL DISPLAY ON THE DOM FOR EACH PHOTO. 

##### Task List ✅

- ✅ Use axios to retrieve (GET) data from to /gallery and store it in App.jsx.
- ✅ Create a new component for the GalleryList and pass it the gallery data stored in App via props.
    - Iterate (loop over) the list of gallery data
    - Make GalleryItems
- ✅ Create a new component called GalleryItem.jsx and pass it the individual gallery item via props.
    - Update the GalleryList to use this component to display an image.
    - Swap the image with the description on click. Use conditional rendering.
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id.
    - Update the gallery each time a like button is clicked.

##### Stretch Goals - Not required to complete. 

Features

- ✅ Move the data into a database (postgresql)
    - name your database react_gallery
    - include a database.sql file documenting your database tables
- ✅ Add a form (new component) that allows a user to POST a new gallery item
    - Client side form (use absolute URL for images)
    - Server side route for posting an image
- ✅ Ability to delete a gallery item
- Add styling with Material-UI https://material-ui.com/
- Use multer for image upload

NOTE: The above stretch goals are intended to be completed in order.