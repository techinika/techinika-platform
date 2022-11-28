import React from "react";
import { Offer } from "../Left Components/Offer";
import { NewQuestion } from "../Fixed Components/newQuestion"

export const ProfileContent = ({t}) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="w-3/4 rounded-md bg-white">
                <NewQuestion t={t}/>
                <hr></hr>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a className={"text-xs font-bold px-5 py-3 shadow-sm rounded block leading-normal " +(openTab === 1 ? "text-white bg-blue-900" : "text-blue-900 bg-white")} onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                                >
                                    Articles
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a className={"text-xs font-bold px-5 py-3 shadow-sm rounded block leading-normal " +(openTab === 2 ? "text-white bg-blue-900" : "text-blue-900 bg-white")} onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                                >
                                    Questions
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a className={"text-xs font-bold px-5 py-3 shadow-sm rounded block leading-normal " +(openTab === 3 ? "text-white bg-blue-900" : "text-blue-900 bg-white")} onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                                >
                                    Answers
                                </a>
                            </li>
                        </ul>

                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className="flex justify-center items-center">
                                            <Offer t={t}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content tab-space">
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                                        <div className="flex flex-col">
                                            <div>
                                                <h1 className="content-title">This is the title of the question</h1>
                                                <p className="text-xs mt-0 mb-2 text-blue-900">Asked on 20th November 2022</p>
                                                <div className="flex flex-row justify-between items-center text-xs mb-1">
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Answers</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">12 Upvotes</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Shares</p>
                                                </div>
                                                <hr></hr>
                                            </div>
                                            <div>
                                                <h1 className="content-title">This is the title of the question</h1>
                                                <p className="text-xs mt-0 mb-2 text-blue-900">Asked on 20th November 2022</p>
                                                <div className="flex flex-row justify-between items-center text-xs mb-1">
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Answers</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">12 Upvotes</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Shares</p>
                                                </div>
                                                <hr></hr>
                                            </div>
                                            <div>
                                                <h1 className="content-title">This is the title of the question</h1>
                                                <p className="text-xs mt-0 mb-2 text-blue-900">Asked on 20th November 2022</p>
                                                <div className="flex flex-row justify-between items-center text-xs mb-1">
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Answers</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">12 Upvotes</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Shares</p>
                                                </div>
                                                <hr></hr>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content tab-space">
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                                    <div className="flex flex-col">
                                            <div>
                                                <h1 className="content-title">{`Answered on "How to make money online?"`}</h1>
                                                <p className="text-xs mt-0 mb-2 text-blue-900">Posted on 20th November 2022</p>
                                                <div className="flex flex-row justify-between items-center text-xs mb-1">
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">12 Upvotes</p>
                                                    <p className="px-2 py-1 bg-gray-100 rounded-full border-2">23 Shares</p>
                                                </div>
                                                <hr></hr>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}