import React from "react";
import { NewQuestion } from "../newQuestion"

export const ProfileContent = ({t}) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="w-3/4 rounded-md bg-white">
                <NewQuestion />
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
                                    <p>
                                        Tab 1
                                    </p>
                                    </div>
                                </div>
                                <div className="tab-content tab-space">
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Tab 2
                                    </p>
                                    </div>
                                </div>
                                <div className="tab-content tab-space">
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Tab 3
                                    </p>
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