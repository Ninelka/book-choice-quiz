import {IBook} from "../types";

export const Book = (props: IBook) => {
    const {id, author, title} = props;

    return (
        <>
            <h2 className="text-xl font-bold text-center mb-4">Результат:</h2>
            <img className="cover" src={`/public/images/${id}.jpg`} alt="book_cover" />
            <h3 className="text-lg font-semibold text-center">{author}</h3>
            <p className="text-center">{title}</p>
        </>
    )
}
