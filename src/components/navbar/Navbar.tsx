import logo from '@/assets/Logo.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/16/solid'
import Link from './Link'
import ActionButton from '../../shared/ActionButton'
import { useState } from 'react'

type Props = {
    selectedPage : string
    setSelectedPage: (value: string) => void
    isTop: boolean
}

const Navbar = ({selectedPage , setSelectedPage  , isTop}: Props) => {
    const [isopen , setIsopen] = useState<boolean>(false)
    const flex = 'flex items-center justify-between '
    const isAboveMediumScreens  = useMediaQuery("(min-width: 1060px)")
    const bg_navbar = isTop ? "" : "bg-primary-100 drop-shadow" 
return (
    <>
    <nav className={`${bg_navbar} py-6 fixed top-0 w-full z-30`}>
        <div className={`${flex} gap-16 w-5/6 mx-auto`}>
        <img src={logo} alt="logo" />
        {isAboveMediumScreens ? 
        <div className={`${flex} w-full`}>
            <div className={`${flex} gap-6`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flex} gap-7`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
        </div>
        : 
        <button onClick={()=>setIsopen(!isopen)} className='p-2 rounded-full bg-secondary-500'><Bars3Icon className="w-6 h-6 text-white"/></button>
        }
        </div>
    </nav>
    {!isAboveMediumScreens && isopen && 
    <aside className=' drop-shadow-xl p-8 fixed right-0 bg-primary-100 h-full w-[300px] z-40'>
        <div className=' flex justify-end'>
        <button onClick={()=>setIsopen(!isopen)}><XMarkIcon className=' w-6 h-6 text-gray-400 mb-5'/></button>
        </div>
        <div className=' ml-[30%] flex  flex-col gap-8 text-xl'>
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
    </aside>
    }
    </>
)
}

export default Navbar