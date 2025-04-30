import quizFlowData from '../../public/data/quizFlow.json'

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

export const quizFlow: Record<string, QuizNode> = quizFlowData
