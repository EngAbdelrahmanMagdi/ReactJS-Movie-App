import React from 'react'
import { Link } from 'react-router-dom' 
export default function Favorites() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome to Abdelrahman's Movie's app</h1>
            <Link to="/">
                <button className="primary-button">Back To movie List</button>
            </Link>
        </div>
    )
}
