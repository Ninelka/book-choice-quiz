import { QuizNode } from '../types'
import { Button } from './Button.tsx'

interface QuestionProps extends QuizNode {
    onClick: (id: string) => void
}

export const Question = ({ question, options, onClick }: QuestionProps) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">{question}</h2>
            <div
                className={`flex flex-wrap gap-3 ${options && options.length > 2 && 'flex-col'}`}
            >
                {options?.map((option) => (
                    <Button
                        {...option}
                        key={option.nextId}
                        onClick={() => onClick(option.nextId)}
                    />
                ))}
            </div>
        </>
    )
}
