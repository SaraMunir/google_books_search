import React from 'react'

function BookList(props) {

    console.log(`booklist is `,  props.bookList)
    // const list = []
    return (
        <div ref={props.myRef}>
            <div class="mb-3">
                { props.bookList ? props.bookList.map( books =>
                    <div class="something container">
                        <div class="bookImg"> 
                            {books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail ? <img src={books.volumeInfo.imageLinks.thumbnail}  /> : '[no image]' }
                        </div>
                        <div class="bookDesc"> 
                            <h4>{books.volumeInfo.title}</h4>
                                {books.volumeInfo.imageLinks && books.volumeInfo.authors ? <ul>{books.volumeInfo.authors.map( author =><li>{author}</li>)}</ul> : '[no author]' }
                            <p>{books.volumeInfo.description}</p>
                            <div class="d-flex justify-content-start">
                                <a class="myBtn2" href={books.volumeInfo.previewLink}>preview</a>
                                <i class=" saveBtn pinkFnt far fa-bookmark fa-3x" ></i>
                                <i class=" saveBtn pinkFnt fas fa-bookmark fa-3x" ></i>
                            </div>
                        </div>
                    </div>
                ) : 'No Books'}
            </div>
        </div>
    )
}

export default BookList;
