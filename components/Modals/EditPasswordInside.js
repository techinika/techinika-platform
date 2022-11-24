


export const EditPasswordInside = ({t, setShowEditPasswordInside}) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-2 mx-auto max-w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="py-6 px-6 lg:px-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-gray-900 dark:text-white font-bold">{t('Change your password')}</h3>
                                <button className="text-red-500 text-xs transition-all duration-150" onClick={() => setShowEditPasswordInside(false)}>
                                    {t('Close')}
                                </button>
                            </div>
                            
                            <form className="space-y-6 w-full" action="#">
                                <div>
                                    <label for="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Current Password')}</label>
                                    <input type="password" name="cpassword" id="cpassword" className="input" placeholder="••••••••" required />
                                </div>
                                <div>
                                    <label for="npassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('New password')}</label>
                                    <input type="password" name="npassword" id="npassword" placeholder="••••••••" className="input" required/>
                                </div>
                                <div>
                                    <label for="conpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Confirm password')}</label>
                                    <input type="password" name="conpassword" id="conpassword" placeholder="••••••••" className="input" required/>
                                </div>
                                
                                <button type="submit" className="btn-long">{t('Change your password')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}