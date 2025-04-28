import {IBook} from "../types";

export const Book = (props: IBook) => {
    const {id, author, title} = props;

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Результат:</h2>
            <img className="cover" src={`/public/images/${id}.jpg`} alt="book_cover" />
            <h3 className="text-lg font-semibold text-center">{author}</h3>
            <p className="text-center">{title}</p>
            <button
                // onClick={onReset}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl transition"
            >
                Пройти снова
            </button>
        </>
    )
}
