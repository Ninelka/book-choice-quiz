import { IButton } from '../types'

export const Button = (props: IButton) => {
    const { onClick, label, text } = props

    return (
        <button
            onClick={onClick}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition cursor-pointer"
        >
            {`${label}${text && `. ${text}`}`}
        </button>
    )
}
