

export const Login = ({setShowModal, t}) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-2 mx-auto max-w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="py-6 px-6 lg:px-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-gray-900 dark:text-white font-bold">{t('Sign in to Techinika')}</h3>
                                <button className="text-red-500 text-xs transition-all duration-150" onClick={() => setShowModal(false)}>
                                    {t('Close')}
                                </button>
                            </div>
                            
                            <form className="space-y-6 w-full" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Your email')}</label>
                                    <input type="email" name="email" id="email" className="input" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('Your password')}</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="input" required/>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('Remember me')}</label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">{t('Lost Password?')}</a>
                                </div>
                                <button type="submit" className="btn-long">{t('Login to your account')}</button>
                                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    {t('Not registered?')} <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">{t('Create account')}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}