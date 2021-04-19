import React from 'react';
import { AnswerObject } from '../App';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) =>void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions,
}) => (
    <div>
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p className="question" dangerouslySetInnerHTML={{ __html: question}}/>
        <div>
            {answers.map( answer => (
             <div key={answer}>
                 <button className="btn btn-outline-primary options col-12" disabled={!!userAnswer} value={answer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{ __html: answer}}/>
                 </button>
             </div>   
            )
            )}
        </div>
    </div>
);

export default QuestionCard;