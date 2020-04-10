require('dotenv').config(); // --> process.env
const express = require( 'express' );
// const fs = require('fs');
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;

const app = express();
app.use( express.urlencoded({ extended: false }) );
app.use( express.json() );

app.post('/api/saveBook', async function( req,res ){
    const bookInfo = req.body;
    console.log( `[POST: /api/saveBook] bookInfo: `, bookInfo );
    
    const registerResult = await orm.saveBook( bookInfo );
    res.send( registerResult );
})
app.get('/api/booklist', async function( req,res ){
    const getBookList = await orm.loadBook();
    console.log('getBookList in server file: ', getBookList)
    res.send( getBookList );
});
app.get('/api/deleteBook/:id', async function( req,res ){
    const deleteBook = await orm.deleteBook(req.params.id);
    console.log('deleting Book in server file: ', deleteBook)
    res.send( deleteBook );
});




app.listen( PORT, function(){
    console.log( `[google books search server] RUNNING, http://localhost:${PORT}` );
 });