import React from 'react'
import { QuizOption } from './quiz.ts'

export interface IButton extends QuizOption {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}
