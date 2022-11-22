import Link from "next/link"


export const Footer = ({t}) => {
    return (
        <>
            <hr></hr>
            <div className="w-full">
                <div className="w-8/12 mx-auto">
                    <h1 className="logo py-2">Techinika</h1>
                    <div className="w-full flex flex-row items-start gap-3">
                        <div className="flex-1 border-r-2">
                            <p>{t('Techinika is an organisation working towards 100% digital inclusion in Rwanda and Africa by 2030.')}</p>
                        </div>
                        <div className="flex-1 border-r-2">
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('About Techinika')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Our Community')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Our Programs')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Our Events')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Terms of use')}</p>    
                                </Link>
                            </a>
                        </div>
                        <div className="flex-1">
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Learning with Techinika')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Private Trainings')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Group Trainings')}</p>    
                                </Link>
                            </a>
                            <a>
                                <Link href="https://about.techinika.com">
                                    <p>{t('Our Partners')}</p>    
                                </Link>
                            </a>
                        </div>
                    </div>
                    <p className="text-sm py-3 text-gray-400">&copy; Techinika 2022</p>
                </div>
            </div>
        </>
    )
}