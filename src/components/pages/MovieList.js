import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Section = styled.div`
  width: 100%;
  height: 110vh;
  padding: 10;
  position: relative;
  background-color:white;
  
`;
const Header1 = styled.h1`
margin:15px;  
text-shadow: 2px 2px 4px #000000;
text-align:center;
`
const Header3 = styled.h3`
margin:15px;  
text-shadow: 2px 2px 4px #000000;
text-align:center;
`

export default function MovieList(props) {
    const [movieData, setMovieData] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c")
            .then(function (response) {
                // handle success
                setMovieData(response.data.results)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (

        <Section>
            <Header1>Movie List</Header1><br />
            <Header3 text-align="center">Click on the movie photo to see its details </Header3>
            {movieData.map((item, index) =>
                <div className="container mt-3">
                    <div className="row m-3">
                        <div className="col-12 p-10 text-white">
                            <div className="card p-0 bg-secondary text-white">
                                <div className="card-body center">
                                    <div className="d-flex justify-content-center">
                                        <span style={{ backgroundColor: "gold", borderRadius: 15, padding: 2 }}>{item.vote_average}</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span style={{ color: "white", }}>{item.title}</span>
                                    </div>
                                    <Link
                                        to={{
                                            pathname: "/details",
                                            param1: item.id
                                        }}
                                        params={{ key: "alaa" }}>
                                        <img
                                            height={"auto"}
                                            width={"100%"}
                                            src={"https://www.themoviedb.org/t/p/w1280/" + item.backdrop_path} alt=''
                                        />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            )}
        </Section>



    );
}