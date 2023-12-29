import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import Arrow from '@/assets/Arrow.png'
import ActionButton from '../../shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '@/hooks/useMediaQuery'
import {motion} from 'framer-motion'


type Props = {
    setSelectedPage : (value:string) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens  = useMediaQuery("(min-width: 1060px)")
return (
    <section id='home' className=' bg-gray-20 py-20 md:h-full '>
        <motion.div 
            className=' w-5/6 mx-auto  md:flex items-center justify-between mt-8 md:h-5/6'
            onViewportEnter={()=>setSelectedPage("home")}
            >
            <div className=' relative z-10 mt-5'>
                <motion.div 
                    className='  before:absolute md:before:content-evolvetext before:-top-20 before:-left-20 before:z-[-1]'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                    <img src={HomePageText} alt="HomePageText" />
                    <p className=' text-sm  md:w-[450px] mt-4'>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </motion.div>
                <motion.div 
                    className=' mt-5 flex items-center gap-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink 
                    className=' cursor-pointer text-sm text-primary-500 underline hover:text-secondary-500'
                    href='#contactus'
                    onClick={()=>setSelectedPage("contactus")}
                    >
                        Learn More
                    </AnchorLink>
                </motion.div>
            </div>
            <div className=' md:w-[450px] z-10 relative'>
                {isAboveMediumScreens && 
                <img className=' absolute top-[100px] left-[-100px] ' src={Arrow} alt="Arrow" />
                }
                <img src={HomePageGraphic} alt="HomePageGraphic" />
            </div>
        </motion.div>
        {isAboveMediumScreens && 
        <div className=' w-full bg-primary-100'>
            <div className=' w-5/6 mx-auto flex items-center gap-[130px] py-10'>
                <img src={SponsorRedBull} alt="SponsorRedBull" />
                <img src={SponsorForbes} alt="SponsorForbes" />
                <img src={SponsorFortune} alt="SponsorFortune" />
            </div>
        </div>
        }
    </section>
)
}

export default Home