import React from 'react';
import MovieForm from '../components/MovieForm';

// 도라에몽 사진
// https://pds.joins.com/news/component/htmlphoto_mmdata/201904/23/htm_20190423191533261569.jpg
const Movie = (props) => {
    const [movie, setMovie] = useState({
        title:"",
        rating:"",
        medium_cover_image:"",
        summary:"",
    });

    const inputChange = (e) =>{
        setMovie({
            ...movie, [e.target.name] : e.target.value
        });
    };

    const movieSave = (e) => {
        e.preventDefault();
        fetch("",{
            method:"post",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((res)=>res.text())
        .then((res)=>{
            if(res === "ok"){
                alert("영화등록 성공");
                props.history.push("/");
            }
        });
    };

    return (
        <div className="container">
            <MovieForm
                inputChange={inputChange}
                movieSaveOrUpate={movieSave}
                movie={movie}
                path="movie"
            />
        </div>
    );
};

export default Movie;