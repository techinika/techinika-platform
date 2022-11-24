import Image from "next/image"
import Link from "next/link"
import Vector from "../../public/vector.png"
import { Offer } from "./Offer"
import BadgeImg from "../../public/badge.jpg";

export const ProfileLeft = ({t}) => {
    const badges = [
        {
            title: "Novice: Answered 5 questions",
            image: BadgeImg,
            id: 1
        },
        {
            title: "Novice: Answered 5 questions",
            image: BadgeImg,
            id: 2
        }
    ];
    return (
        <>
        <div className="rounded-md flex flex-col  w-1/4 gap-2">
            <div className="bg-white w-full rounded-md text-center relative">
                <p className="text-xs text-blue-900 absolute top-3 right-3 cursor-pointer">Edit</p>
                <div className="flex flex-col items-center py-5 px-2">
                    <Image className="rounded-full" src={Vector} width="100" height={100}/>
                    <h1 className="font-bold text-xl p-1">Cishahayo Songa Achille</h1>
                    <p className="mt-0 mb-2 text-xs text-blue-900">@achillesonga</p>
                    <p>Building the future of technology.</p>
                    <p className="badge">Normal Mode</p>
                </div>
                <hr></hr>
                <div className="p5">
                    <div className="font-bold flex flex-row items-center">
                        <p>{t('Total Articles')}</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                    <div className="font-bold flex flex-row items-center">
                        <p>{t('Total Questions')}</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                    <div className="font-bold flex flex-row items-center">
                        <p>{t('Total Answers')}</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                </div>
                <hr></hr>
                <div className="p-5">
                    <h1 className="title">Badges</h1>
                    {badges.length !== 0 ?<div className="flex flex-wrap flex-row items-center justify-center">
                        {badges.map(b => (
                            <div key={b.id}>
                                <Image src={b.image} width="50" height="60" title={b.title}/>
                            </div>
                        ))}
                    </div> : <p>No badges yet, ask questions and answer questions to earn some badges.</p>}

                </div>
                <hr></hr>
                <div className="font-bold flex justify-center items-center p-4 text-blue-900">
                    <Link href="#">{t('Change your password')}</Link>
                </div>
            </div>
            <Offer t={t}/>
        </div>
        </>
    )
}