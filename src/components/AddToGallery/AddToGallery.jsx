import { useState } from 'react';
import axios from 'axios';

function AddToGallery ({fetchGallery}) {

    //THIS IS THE REACT STATE THAT IS IMPORTANT.
    const [newGalleryItem, setNewGalleryItem] = useState ({path: '', description: '',})

    // THIS PREVENTS PAGE LOAD FROM KEEP REFESHING WHEN PRESSING ENTER KEY. 
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newGalleryItem);
    }

    // THIS FUNCTION EMPTY THE INPUT.
    function emptyInputs() {
        setNewGalleryItem({path:'', description:''})
    }

    // POST ROUTE
    const addItem = (item) => {
        console.log(`New Item: ${item}`);
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: item.path,
                description: item.description
            }
        })
        .then((postRes) => {
            console.log('POST Route Successful:', postRes);
            fetchGallery();
            emptyInputs();
        })
        .catch((postErr) => {
            console.log('POST Route Unsuccessful:', postErr);
        })
    } // END OF POST ROUTE.

    // THIS FUNCTION HANDLES THE INPUT UPDATE/CHANGES. 
    const handleChange = e => {
        const { name, value } = e.target;
        setNewGalleryItem(newGalleryItem => ({
            ...newGalleryItem,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Post Gallery</h2>
            <input onChange= {handleChange}
                type="text"
                value={newGalleryItem.path}
                placeholder="URL"
                name="path"
            />
            <input onChange= {handleChange}
                type="text"
                value={newGalleryItem.description}
                placeholder="Description"
                name="description"
            />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddToGallery;