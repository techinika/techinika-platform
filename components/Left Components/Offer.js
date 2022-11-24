import Image from "next/image"
import Award from "../../public/award.jpg"

export const Offer = ({t}) => {
    return (
        <div className="w-full bg-white rounded-lg px-3 py-6 flex flex-col items-center text-center gap-3">
            <Image width={50} height={50} src={Award}/>
            <p>{t('The world would like to see what you can offer. With our premium mode, you have access to article publishing, and adding more info to your profile.')}</p>
            <button className="btn-empty">{t('Upgrade Now')}</button>
        </div>
    )
}