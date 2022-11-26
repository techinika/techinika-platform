import React from "react"
import Image from "next/image"
import Vector from "../../public/vector.png"
import { Offer } from "./Offer"
import BadgeImg from "../../public/badge.jpg";
import { EditPasswordInside } from "../Modals/EditPasswordInside";
import { EditProfile } from "../Modals/EditProfile";

export const ProfileLeft = ({t}) => {
    const [showEditPasswordInside, setShowEditPasswordInside] = React.useState(false)
    const [showEditProfile, setShowEditProfile] = React.useState(false)
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

        {showEditPasswordInside ? <EditPasswordInside setShowEditPasswordInside={setShowEditPasswordInside} t={t}/> : null}

        {showEditProfile ? <EditProfile t={t} setShowEditProfile={setShowEditProfile}/> : null}

        <div className="rounded-md flex flex-col  w-1/4 gap-2">
            <div className="bg-white w-full rounded-md text-center relative">
                <p className="text-xs text-blue-900 absolute top-3 right-3 cursor-pointer"  onClick={e=> setShowEditProfile(true)}>Edit</p>
                <div className="flex flex-col items-center py-5 px-2">
                    <Image className="rounded-full" src={Vector} width="100" height={100} alt="Badge"/>
                    <h1 className="font-bold text-xl p-1">Cishahayo Songa Achille</h1>
                    <p className="mt-0 mb-2 text-xs text-blue-900">@achillesonga</p>
                    <p>Building the future of technology.</p>
                    <p className="badge">{t('Normal Mode')}</p>
                </div>
                <hr></hr>
                <div className="p-5">
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
                    <h1 className="title">{t('Badges')}</h1>
                    {badges.length !== 0 ?<div className="flex flex-wrap flex-row items-center justify-center">
                        {badges.map(b => (
                            <div key={b.id}>
                                <Image src={b.image} width="50" height="60" title={b.title} alt="Badge"/>
                            </div>
                        ))}
                    </div> : <p>{t('No badges yet, ask questions and answer questions to earn some badges.')}</p>}

                </div>
                <hr></hr>
                <div className="font-bold flex justify-center items-center p-4 text-blue-900">
                    <p onClick={e=> setShowEditPasswordInside(true)} className="cursor-pointer">{t('Change your password')}</p>
                </div>
            </div>
            <Offer t={t}/>
        </div>
        </>
    )
}