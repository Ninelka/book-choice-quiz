import React, {useEffect, useState} from 'react';
import {useFetchData} from "./services/useFetchData";
import {IQuestion, IButton, IBook} from './types';

import { Book } from './components/Book.tsx';
import {Question} from "./components/Question.tsx";

const App: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1)
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>()
  const [target, setTarget] = useState<number>()
  const [book, setBook] = useState<IBook>()

  const questionsData = useFetchData('/data/questions.json')
  const booksData = useFetchData('/data/books_ru.json')

  const findCurrentQuestion = (questions: IQuestion[], id: number) => {
    if (!questions || !id) {
      return;
    }

    return questions?.find((question: IQuestion) => question.id === id);
  }

  const goToResult = (books: IBook[] | IQuestion[], id: number): IBook | undefined => {
    if (!books || !id) {
      return;
    }

    return (books as any[]).find((book: IBook) => book.id === id);
  }

  const handleClick = (button: IButton) => {
    if (button.target) {
      setTarget(button.target)
    }

    if (button.nextStep) {
      setCurrentQuestionId(button.nextStep)
      setBook(undefined);

      if (button.target) {
        setTarget(button.target)
      }
    }
  }

  useEffect(() => {
    let question;

    if (questionsData) {
      question = findCurrentQuestion(questionsData, currentQuestionId);
      setCurrentQuestion(question);
    }

  }, [currentQuestionId, questionsData])

  useEffect(() => {
    let book;
    if (booksData && target) {
      book = goToResult(booksData, target);
      setBook(book);
    }
  }, [target])

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="flex flex-col items-center justify-center w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
          {book && (
              <Book
                  id={book.id}
                  title={book.title}
                  author={book.author}
              />
          )}
          {(!book && currentQuestion) && (
              <Question question={currentQuestion} onClick={handleClick} />
          )}
        </div>
      </div>
  )
}

export default App;
