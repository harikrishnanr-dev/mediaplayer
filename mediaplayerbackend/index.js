//import json-server
const jsonServer=require('json-server');

//create server using create()method
const mediaPlayerServer = jsonServer.create()

//create a patch / route to db.json file
const router=jsonServer.router('db.json')

//create a middle ware
const middleware=jsonServer.defaults();

//add middlwwarea and router to mediaPlayerServer
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const PORT =4000;

//run the mediaplayerServer
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Mediaplayer server running on PORT ${PORT}`)
})