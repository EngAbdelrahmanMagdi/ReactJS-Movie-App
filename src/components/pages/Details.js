import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom' 
import axios from "axios";
export default function Favorites(props) {
    const movieId=props.location.param1;
    const [movieDetails,setMovieDetails]=useState('')
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`)
            .then(function (response) {
                // handle success
                setMovieDetails(response.data)
                console.log(response,"====");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Movie Details</h1>
            <div className="container mt-3">
                    <div className="row m-3">
                        <div className="col-12 p-10 text-white">
                            <div className="card p-0 bg-secondary text-white">
                                <div className="card-body center">
                                    <div className="d-flex justify-content-center">
                                        <span style={{ backgroundColor: "gold", borderRadius: 15, padding: 2 }}>{movieDetails.vote_average}</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span style={{ color: "white", }}>{movieDetails.title}</span>
                                    </div>
                                    <Link
                                        to={{
                                            pathname: "/details",
                                            param1: movieDetails.id
                                        }}
                                        params={{ key: "alaa" }}>
                                        <img
                                            height={"auto"}
                                            width={"100%"}
                                            src={"https://www.themoviedb.org/t/p/w1280/" + movieDetails.backdrop_path} alt=''
                                        />
                                    </Link>
                                    <div className="d-flex justify-content-center m-3">
                                        <span>{movieDetails.overview}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            <Link to="/">
                <button className="primary-button">Back To movie List</button>
            </Link>
        </div>
    )
}
