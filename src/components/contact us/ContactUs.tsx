import Htext from "@/shared/Htext"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import { useForm } from "react-hook-form"



type Props = {
    setSelectedPage: (value:string) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyle = " mb-5 w-full bg-primary-300 rounded-lg px-5 py-3 placeholder-white"

    const {
        register,
        trigger,
        formState: { errors},
    } = useForm();

    const handelSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
return (
    <section id="contactus" className=" bg-gray-20 py-10 ">
        <motion.div 
        onViewportEnter={()=>setSelectedPage('contactus')}
        className=" w-5/6 mx-auto"
        >
            {/* header */}
            <motion.div
            className=" md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0 , x: -50 },
                visible: {opacity:1, x: 0},
            }}
            >
                <Htext>
                    <span className=" text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </Htext>
                <p className=" py-5">
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>
            {/* form and img */}
            <div className=" md:flex my-10 justify-between gap-8">
                <motion.div 
                className=" basis-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true , amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: {opacity: 0 , y: 50},
                    visible: {opacity:1 , y: 0 },
                }}
                >
                    <form 
                    target="_blank"
                    onSubmit={handelSubmit}
                    method="POST"
                    action="https://formsubmit.co/zikoxdodo@gmail.com"
                    >
                        <input
                        className={inputStyle}
                        type="text"
                        placeholder="Name" 
                        {...register("name" , {
                            required:true,
                            maxLength:100,
                        })}/>
                        {errors.name && (
                            <p className=" mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <input 
                        className={inputStyle}
                        type="text"
                        placeholder="email"
                        {...register("email" , {
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })} />
                        {errors.email && (
                            <p className=" mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        <textarea 
                        placeholder="Message"
                        className={inputStyle}
                        rows={4}
                        cols={50}
                        {...register("message" , {
                            required:true,
                            maxLength: 2000,
                        })} />
                        {errors.message && (
                            <p className=" mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                            </p>
                        )}
                        <button
                        type="submit"
                        className=" bg-secondary-500 py-3 px-20 rounded-lg mt-5 transition duration-500 hover:text-white">
                        SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                className=" relative my-16 md:mt-0 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true , amount:0.5}}
                transition={{delay:0.2 , duration:0.5}}
                variants={{
                    hidden: {opacity: 0 , y: 50},
                    visible: {opacity:1 , y: 0 },
                }}
                >
                    <div className=" before:absolute md:before:content-evolvetext before:z-[-1] before:-bottom-[100px] before:-left-[205px]">
                        <img className=" w-full" src={ContactUsPageGraphic} alt="ContactUsPageGraphic" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
)
}

export default ContactUs