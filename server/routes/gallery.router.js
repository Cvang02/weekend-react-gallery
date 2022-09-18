const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route - base mode
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route - base mode
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET ROUTE - USING DATABASE SQL.
router.get('/', (req, res) => {
    
    const sqlText = `
        SELECT * FROM gallery
        ORDER BY "id";
    `;

    pool.query(sqlText)

    .then((getRes) => {
        console.log('GET Route Successful');
            const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
        res.send(getRes.rows);
    })
    .catch((getErr) => {
        console.log('GET Route Unsuccessful', getErr);
        res.sendStatus(500);
    })
}) 

// PUT ROUTE - USING DATABASE SQL.
router.put('/like/:id', (req, res) => {

    const sqlText = `
        UPDATE gallery
        SET "likes"= likes + 1
        WHERE "id"=$1;
    `
    const sqlValue = [req.params.id];

    console.log(req.params);

    pool.query(sqlText, sqlValue)
    
    .then((putRes) => {
        console.log('PUT Route Successful', putRes);
        res.sendStatus(200);
    })
    .catch((putErr) => {
        console.log('PUT Route Unsuccessful', putErr);
        res.sendStatus(500);
    })
})

// POST ROUTE - USING DATABASE SQL.
router.post('/', (req, res) => {

    console.log('POST New Data:', req.body)

    const sqlText = `
        INSERT INTO gallery 
            (path, description)
	    VALUES 
            ($1, $2)
    `
    const sqlVal = [req.body.path, req.body.description]

    pool.query(sqlText, sqlVal)

        .then((postRes) => {
            console.log('POST Route Successful', postRes);
            res.sendStatus(201)
        }).catch((postErr) => {
            console.log('POST Route Unsuccessful', postErr);
            res.sendStatus(500)
        })
})

// DELETE ROUTE - USING DATABASE SQL. 
router.delete('/:id', (req, res) => {

    console.log(`Deleting Item with ID ${req.params.id}`);
    
    const sqlText = `
        DELETE from gallery
        WHERE "id"=$1;
        `
    let sqlVal = [req.params.id];
    
    pool.query(sqlText, sqlVal)

    .then((delRes) => {
        console.log('DELETE Route Successful', delRes);
        res.sendStatus(200);
    })
    .catch((delErr) => {
        console.log('DELETE Route Unsuccessful', delErr);
        res.sendStatus(500);
    });
})

module.exports = router;