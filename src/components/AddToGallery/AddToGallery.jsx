import { useState } from 'react';
import axios from 'axios';

function AddToGallery ({fetchGallery}) {

    const [newGalleryItem, setNewGalleryItem] = useState ({path: '', description: '',})

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newGalleryItem);
    }

    function emptyInputs() {
        setNewGalleryItem({path:'', description:''})
    }

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
    }

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
                placeholder="description"
                name="description"
            />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddToGallery;