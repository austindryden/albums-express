const http = require('http');
const express = require("express");
// const fs = require('fs');
const album = require("./albums");
const app = express();
const server = http.createServer(app);
const PORT = "3003";
// const albumData = fs.readFileSync('./albumsData.json').toString();

app.get('/', (request, response)=>{
    response.send("go somewhere so I can do something");
});

app.get('/album', (request, response) =>{
    response.send(album.getAllAlbums());
});

app.get('/album/:albumID', (request, response) =>{
    const albumID = request.params.albumID;
    response.send(album.getAlbum(albumID));
});

app.get('/album/:albumID/song', (request, response) =>{
    const albumID = request.params.albumID;
    response.send(album.getAllSongs(albumID));
});

app.get('/album/:albumID/song/:songID', (request, response) =>{
    const albumID = request.params.albumID;
    const songID = request.params.songID;
    response.send(album.getSongsForAlbum(albumID,songID));
});

app.get('/API/album/:albumID', (request, response) =>{
    const albumID = request.params.albumID;
    response.json(album.getAlbumJSON(albumID));
});

app.get('/API/album/:albumID/song/:songID', (request, response) =>{
    const albumID = request.params.albumID;
    const songID = request.params.songID;
    response.json(album.getSongJSON(albumID,songID));
});

server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});