import React, { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';

const MovieDetail = (props) => {

    const [movie, setMovie] = useState({
        title:"",
        rating:"",
        medium_cover_image:"",
        summary:"",
    });

    //id 값으로 get요청해서 값 가져옴
    function movieFetch(id){
        fetch("")
        .then((res)=> res.json())
        .then((res) =>{
            setMovie(res);
        });
    }

    //이 컴포넌트가 최초로 실행될때 
    useEffect(()=>{
        movieFetch(props.match.params.id);
    },[]);

    const inputChange = (e) =>{
        setMovie({ ...movie, [e.target.name]:e.target.value});
    };

    const movieUpdate = (e) =>{
        e.preventDefault();
        fetch("",{
            method:"put",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((res)=> res.text())
        .then((res)=>{
            if(res === "ok"){
                alert("영화수정 성공");
                props.history.push("/");
            }
        });
    };
    return (
        <div className="container">
            <MovieForm
                inputChange={inputChange}
                movieSaveOrUpdate={movieUpdate}
                movie={movie}
                path="movieDetail"
            />
        </div>
    );
};

export default MovieDetail;