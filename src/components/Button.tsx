import {IButton} from '../types';

export const Button = (props: IButton) => {
    const { clickEvent, title, text } = props;

    return (
        <>
            <button onClick={clickEvent} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition">
                {title}
            </button>
            <p>{text}</p>
        </>
    )
}
