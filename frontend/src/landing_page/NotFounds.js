import React from 'react'
import { Link } from 'react-router-dom';

function NotFounds() {
    return (
        <div className='container text-center p-5 mt-5'>
            <h1 className='fs-3 mt-3' style={{opacity: "0.9"}}>404 Not Found</h1>
            <p className='text-muted mt-3'>Sorry, the page you are looking does not exit.</p>
            <Link to="/" style={{textDecoration: "none"}}>
            <b>Go to Home Page <i class="fa fa-long-arrow-right" aria-hidden="true"></i></b>
            </Link>
        </div>
    );
}

export default NotFounds;