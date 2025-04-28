import React, {useEffect, useState} from 'react';
import {useFetchData} from "./services/useFetchData";
import {IQuestion, IButton, IBook} from './interfaces/';

import { Button } from './components/Button/Button';
import { Book } from './components/Book/Book';

const App: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1)
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>()
  const [target, setTarget] = useState<number>()
  const [book, setBook] = useState<IBook>()

  const questionsData = useFetchData('/data/questions.json')
  const booksData = useFetchData('/data/books.json')

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
    <>
      <h1>{currentQuestion?.title}</h1>
      {book && (
          <Book
              id={book.id}
              title={book.title}
              author={book.author}
          />
      )}
      {currentQuestion?.buttons?.map((button, index) =>
        <Button
          key={index}
          title={button.title}
          text={button.text}
          clickEvent={() => handleClick(button)}
        />
      )}
    </>
  )
}

export default App;
