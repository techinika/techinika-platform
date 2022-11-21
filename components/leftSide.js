
import { Offer } from "./Left Components/Offer"
import { ShortProfile } from "./Left Components/Profile"

export const LeftSide = () => {
    return (
        <>
            <div className="rounded-md flex flex-col  w-1/4 gap-2">
                <ShortProfile />
                <hr></hr>
                <Offer/>
            </div>
        </>
    )
}