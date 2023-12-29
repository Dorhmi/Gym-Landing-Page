import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"


const childVariants = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element
    title: string
    description: string
    setSelectedPage: (value:string) => void
}

const Benefit = ({icon , title , description , setSelectedPage }: Props) => {
return (
    <motion.div 
    className=" mt-5 border-2 border-gray-100 rounded-md px-5 py-16 text-center"
    variants={childVariants}
    >
        <div className=" mb-4 flex justify-center">
            <div className=" bg-primary-100 p-4 rounded-[100%] border-2 border-gray-100">
            {icon}
            </div>
        </div>
        <h4 className=" font-bold">{title}</h4>
        <p className=" my-4">{description}</p>
        <AnchorLink 
            className=' cursor-pointer text-sm text-primary-500 underline hover:text-secondary-500'
            href='contactus'
            onClick={() => setSelectedPage('contactus')}
            >
            Learn More
        </AnchorLink>
    </motion.div>

)
}

export default Benefit