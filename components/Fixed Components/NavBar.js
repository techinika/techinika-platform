import React from 'react';
import { Login } from '../Modals/Login';

export const NavBar = ({t}) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
           {showModal ? <Login setShowModal={setShowModal} t={t}/> : null}


            <div className='bg-white'>
                <div className='flex justify-between items-center py-2 w-8/12 mx-auto'>
                    <div>
                        <h1 className='logo'>{t('Techinika')}</h1>
                    </div>
                    <div>
                        <input placeholder={t('Search ...')} className='input'/>
                    </div>
                    <div className='flex gap-3'>
                        <button className='btn-blue transition-all duration-150' type="button" onClick={() => setShowModal(true)}>{t('Log In')}</button>
                        <button className='btn-normal'>{t('Sign Up')}</button>
                    </div>
                </div>
            </div>
        </>
    )
}