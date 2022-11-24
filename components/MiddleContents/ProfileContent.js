import Image from "next/image"
import Dmc from "../../public/dmc.jpg"
import { NewQuestion } from "../newQuestion"

export const ProfileContent = ({t}) => {
    return (
        <>
            <div className="w-3/4 rounded-md bg-white">
                <NewQuestion />
                <hr></hr>
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" dataTabsToggle="#myTabContent" role="tablist">
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" dataTabsTarget="#articles" type="button" role="tab" ariaControls="articles" ariaSelected="false">Articles</button>
                        </li>
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" dataTabsTarget="#questions" type="button" role="tab" ariaControls="questions" ariaSelected="false">Questions</button>
                        </li>
                        <li className="mr-2" role="presentation">
                            <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" dataTabsTarget="#answers" type="button" role="tab" ariaControls="answers" ariaSelected="false">Answers</button>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent">
                    <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="articles" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="questions" role="tabpanel" aria-labelledby="dashboard-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="answers" role="tabpanel" aria-labelledby="settings-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div>
            </div>
        </>
    )
}