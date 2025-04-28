import React from 'react'
import {IBook} from "../../interfaces";

export const Book = (props: IBook) => {
    const {id, author, title} = props;

    return (
        <div>
            <img src={`/public/images/${id}.jpg`} alt="book_cover" />
            <h2>{author}</h2>
            <p>{title}</p>
        </div>
    )
}
