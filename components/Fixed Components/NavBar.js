import { useRouter } from 'next/router';
import React from 'react';

export const NavBar = () => {
    const { locale, locales, push } = useRouter();
    const [loc, setLoc] = React.useState()

    // const handleLocale = (l) => {
    //     push('/', undefined, {locale: l});
    // }
    React.useEffect(()=> {
        push('/', undefined, {locale: loc});
    }, [loc])

    return (
        <>
            <div className='flex justify-between items-center bg-white py-2 px-10'>
                <div>
                    <h1 className='logo'>Techinika</h1>
                </div>
                <div>
                    <input placeholder='Search ...' className='input'/>
                </div>
                <div className='flex gap-3'>
                    {/* {locales.map(l => (
                        <button key={l} onClick={handleLocale(l)}>
                            {l}
                        </button>
                    ))} */}
                    <select value={loc} onChange={e => setLoc(e.target.value)} className="select">
                        <option value="kin">Kin</option>
                        <option value="en">En</option>
                        <option value="fr">Fr</option>
                    </select>
                    <button className='btn-blue'>Log In</button>
                    <button className='btn-normal'>Sign Up</button>
                </div>
            </div>
        </>
    )
}