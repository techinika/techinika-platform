import Image from "next/image"
import Award from "../../public/award.jpg"

export const Offer = ({t}) => {
    return (
        <div className="w-full bg-white rounded-lg px-3 py-6 flex flex-col items-center text-center gap-3">
            <Image width={50} height={50} src={Award}/>
            <p>{t('Get Access to article publishing')}</p>
            <button className="btn-empty">{t('Enroll Now')}</button>
        </div>
    )
}