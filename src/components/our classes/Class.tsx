


type Props = {
    name:string
    description?:string
    image:string
}

const Class = ({ name , description , image}: Props) => {
return (
    <li className=" relative mx-5 ">
        <div 
        className=" text-center w-[427px] h-[380px] 
        p-5 absolute z-10 text-white bg-primary-500 
        flex items-center justify-center flex-col opacity-0 
        hover:opacity-80 transition duration-500 ">
            <h3 className=" text-2xl">{name}</h3>
            <p className=" py-3">{description}</p>
        </div>
        <img className=" w-[450px] h-[380px] object-cover" src={image} alt={image} />
    </li>
)
}

export default Class