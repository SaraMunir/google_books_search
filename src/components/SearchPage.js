import React from 'react'
import heroImg from './assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
function SearchPage() {
    const searchStyle= {
        height: '80vh',
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPostition: 'center' 
    }
    return (
        <div class="jumbotron jumbotron-fluid hero" style={searchStyle}>
            searching page
        </div>
    )
}

export default SearchPage;
