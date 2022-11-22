import { RecentArticles } from "./Recent/Articles"
import { RecentQuestions } from "./Recent/Questions"


export const RightSide = ({t}) => {
    return (
        <>
            <div className="rounded-md flex flex-col  w-1/4 gap-2">
                <RecentQuestions t={t}/>
                <hr></hr>
                <RecentArticles t={t}/>
            </div>
        </>
    )
}