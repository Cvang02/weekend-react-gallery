# PROJECT: React - Gallery of My Life.

## Description

Duration: ~ 72 hours.

This week Prime session, we learned react.js and how it runs within the client side and server side. We explore on how to create different react components and use those components to import/export data and pass data as props. For this weekend challenge, we must use the information that we learned about react.js and use it to create a gallery. 

For this project base mode, create a gallery page to share pictures of things that are important to you. Visitors can click on an image to see a description and use a button to "like" an image.

https://github.com/Cvang02/weekend-react-gallery/blob/main/wireframes/first-mockup.png
https://github.com/Cvang02/weekend-react-gallery/blob/main/wireframes/second-mockup.png

To solve this, my first initial process is to layout a map on how to approach each individual task given by creating a to-do list containing information about how to complete each task (Look at TODOLIST.md for more info.) 

To share pictures, I worked on the GET route first to make sure my dummy data were rendering onto the DOM. After, I worked on the PUT route to update the like button when clicked on it will display total like count. For the image description to appear when clicking on the picture, I used conditional rendering to help remove the image when the text appears and vise-versa. Once, all base mode task were completed, I style it a little for visual before working on stretch goals. Here is a photo of base mode. 

![base1](https://user-images.githubusercontent.com/105823509/190927511-a221b575-8f51-4b84-a643-c5f4ac98ccec.png)
![base2](https://user-images.githubusercontent.com/105823509/190927544-fc58661a-8ae9-4970-8be9-29337e494bfb.png)

Stretch goals are not required to complete but can be useful for practicing purposes. For the stretch goals, I need to move my dummy data into a database using postico. I also created a delete button to delete any data from the client and server side using a delete route. A submit button was also created to let user add any new post/data. Sweet Alert was also incorporated for visual and more css styling were added. Here is the final product of my weekend challenge using react.js that I learned. 

![final1](https://user-images.githubusercontent.com/105823509/190927556-32e73a88-9a90-4b88-b383-a67bc87c2ce5.png)

Stretch goals are not required to complete but can be useful for practicing purposes. For the stretch goals, I need to move my dummy data into a database using postico. I also created a delete button to delete any data from the client and server side using a delete route. A submit button was also created to let user add any new post/data. Sweet Alert was also incorporated for visual and more css styling were added. Here is the final product of my weekend challenge using react.js that I learned. 

To see the fully functional site, please visit: heroku link will be upload soon.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- react.js
- axios
- body-parser
- epress
- postgresql


## Installation

1. Create a database named `react_gallery`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
Once everything is setup and client and server are both running at the same time. 

1. To add a new post, a picture url must be use as an input and add a brief description of it and click submit. 
A new post should have pop up in the DOM. 
2. To Like a picture, there is a heart button that can be click to show if picture was liked and the total like count should update. 
3. To delete a post, there is a trashcan button to delete each individual post. 
4. To find the desciption, just click on the image and description should appear and to make picture appear again. Just click on the text description. 
5. There is a dinosaur button also include, click on it to find what it does. 

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at chameng.vang@outlook.com
