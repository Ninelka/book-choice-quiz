import {IButton, IQuestion} from "../types";
import {Button} from "./Button.tsx";

interface QuestionProps {
    question: IQuestion
    onClick: (button: IButton) => void
}

export const Question = ({ question, onClick }: QuestionProps) => {
    return (
        <>
            <h2 className="text-xl font-semibold text-center mb-4">{question.title}</h2>
            <div className="flex flex-col gap-3">
                {question?.buttons?.map((button, index) => (
                    <Button
                        key={index}
                        title={button.title}
                        text={button.text}
                        clickEvent={() => onClick(button)}
                    />
                    ))}
            </div>
        </>
    )
}
