import React from 'react'
import {IBook} from "../../interfaces";

function Book(props: IBook) {
    return (
        <div>
            <h2>{props.author}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Book;
