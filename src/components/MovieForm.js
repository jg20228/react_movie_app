import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    width:100%;
    height:40px;
`;

const MovieForm = (props) => {
    const{movie,inputChange,movieSaveOrUpdate, path} =props;
    return (
        <div>
            <InputStyle
            value={movie.title}
            onChange={inputChange}
            type="text"
            name="title"
            placeholder="제목"
            />
            <InputStyle
            value={movie.rating}
            onChange={inputChange}
            type="text"
            name="rating"
            placeholder="평점"
            />

            <InputStyle
            value={movie.medium_cover_image}
            onChange={inputChange}
            type="text"
            name="medium_cover_image"
            placeholder="사진주소"
            />

            <InputStyle
            value={movie.summary}
            onChange={inputChange}
            type="text"
            name="summary"
            placeholder="영화설명"
            />

            <button className="buttonBlue" onClick={movieSaveOrUpdate}> 
              {path === "movie" ? "영화등록" : "영화수정"}
            </button>
        </div>
    );
};

export default MovieForm;