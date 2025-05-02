import { QuizResult } from '../types'
import { Button } from './Button.tsx'
import { useTranslation } from 'react-i18next'

interface ResultProps {
    id: string
    result: QuizResult
    onReset: () => void
    onClick: (id: string) => void
}

export const Result = ({ id, result, onClick, onReset }: ResultProps) => {
    const { t } = useTranslation();

    const { title, author, options } = result

    return (
        <>
            <h2 className="text-xl font-bold mb-4">{t('result')}</h2>
            <img
                className="bg-no-repeat bg-center w-auto h-100 object-contain rounded-xl mb-4"
                src={`/public/images/${id}.jpg`}
                alt={title}
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mb-3">{author}</p>
            {options?.map((option) => (
                <Button
                    {...option}
                    key={option.nextId}
                    onClick={() => onClick(option.nextId)}
                />
            ))}
            <button
                onClick={onReset}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl transition cursor-pointer"
            >
                {t('restart')}
            </button>
        </>
    )
}
