import { lazy, useState } from 'react'

import { Question } from './components/Question.tsx'
import { useQuizData } from './types/quiz.ts'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageSwitcher } from './components/LanguageSwitcher.tsx'
import { useTranslation } from 'react-i18next'

const Result = lazy(() => import('./components/Result.tsx'))

export const App = () => {
    const { i18n } = useTranslation()
    const [path, setPath] = useState(['q1'])
    const quizFlow = useQuizData(i18n.language)

    const currentId = path[path.length - 1]
    const node = quizFlow[currentId]

    const handleOptionClick = (nextId: string) => {
        setPath([...path, nextId])
    }

    const handleRestart = () => {
        setPath(['q1'])
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <LanguageSwitcher />
            <div className="text-center w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={node.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {node.question ? (
                            <Question
                                id={node.id}
                                question={node.question}
                                options={node.options}
                                onClick={handleOptionClick}
                            />
                        ) : node.result ? (
                            <Result
                                id={node.id}
                                result={node.result}
                                onReset={handleRestart}
                                onClick={handleOptionClick}
                            />
                        ) : null}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App
