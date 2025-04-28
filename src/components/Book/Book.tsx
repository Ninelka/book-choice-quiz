import {IBook} from "../../types";

export const Book = (props: IBook) => {
    const {id, author, title} = props;

    return (
        <div>
            <img className="cover" src={`/public/images/${id}.jpg`} alt="book_cover" />
            <h2>{author}</h2>
            <p>{title}</p>
        </div>
    )
}
