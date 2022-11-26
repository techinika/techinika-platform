import Image from "next/image"
import Vector from "../../public/vector.png"

export const EditProfile = ({setShowEditProfile, t}) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-2 mx-auto max-w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="py-6 px-6 lg:px-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-gray-900 dark:text-white font-bold">{t('Edit your profile')}</h3>
                                <button className="text-red-500 text-xs transition-all duration-150" onClick={() => setShowEditProfile(false)}>
                                    {t('Close')}
                                </button>
                            </div>
                            
                            <form className="space-y-6 w-full" action="#">
                                <div className="flex flex-col items-center py-5 px-2">
                                    <Image className="rounded-full object-cover" src={Vector} width="100" height={100} alt="content"/>
                                    <input className="font-bold text-xl p-1 border-2 outline-none rounded-full px-3 py-1 text-center" value="Cishahayo Songa Achille" />
                                </div>
                                <div>
                                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Small Bio')}</label>
                                    <textarea className="input" id="bio">Building the future of technology.</textarea>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Your email')}</label>
                                    <input type="email" name="email" id="email" className="input" placeholder="name@company.com" value="email@yours.com" required />
                                </div>
                                
                                <button type="submit" className="btn-long">{t('Save Profile')}</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}