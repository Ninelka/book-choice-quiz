import quizFlowEnData from '../../public/data/quizFlow_en.json'
import { useEffect, useState } from 'react'

export type QuizOption = {
    label: string
    text: string
    nextId: string
}

export type QuizResult = {
    title: string
    author: string
    options?: QuizOption[]
}

export type QuizNode = {
    id: string
    question?: string
    result?: QuizResult
    options?: QuizOption[]
}

type QuizFlowData = Record<string, QuizNode>

export const useQuizData = (lang: string) => {
    const [data, setData] = useState<QuizFlowData>(quizFlowEnData)

    useEffect(() => {
        if (lang === 'en') {
            setData(quizFlowEnData)
        } else if (lang === 'ru') {
            import('../../public/data/quizFlow_ru.json').then((module) => {
                setData(module.default)
            })
        }
    }, [lang])

    return data
}
