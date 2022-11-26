
import { Offer } from "./Left Components/Offer"
import { ShortProfile } from "./Left Components/Profile"

export const LeftSide = ({t}) => {
    return (
        <>
            <div className="rounded-md flex flex-col  w-1/4 gap-2">
                <ShortProfile t={t}/>
                <hr></hr>
                <Offer t={t}/>
            </div>
        </>
    )
}