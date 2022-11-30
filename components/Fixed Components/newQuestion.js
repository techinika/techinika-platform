import React from "react"
import { NewQuestionModal } from "../Modals/NewQuestion"

export const NewQuestion = ({t}) => {
    const [showAddQuestion, setShowAddQuestion] = React.useState(false)
    return (
        <>
            {showAddQuestion ? <NewQuestionModal setShowAddQuestion={setShowAddQuestion} t={t} /> : null}
            <div className="p-3" onClick={e => setShowAddQuestion(true)}>
                <input placeholder="Click to add new question" className="p-3 border-2 border-gray-100 w-full rounded-lg cursor-pointer" disabled/>
            </div>
        </>
    )
}