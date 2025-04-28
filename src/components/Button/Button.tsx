import {IButton} from '../../types';

export const Button = (props: IButton) => {
    const { clickEvent, title, text } = props;

    return (
        <button onClick={clickEvent}>
            {title}
            {text}
        </button>
    )
}
