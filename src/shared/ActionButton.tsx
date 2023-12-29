import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"




type Props = {
    children : React.ReactNode
    setSelectedPage:(value:string) => void
}

const ActionButton = ({children , setSelectedPage}: Props) => {
return (
    <AnchorLink className=" bg-secondary-500 py-2 px-10 rounded-lg hover:bg-primary-500 hover:text-white cursor-pointer transition duration-500"
    onClick={()=>setSelectedPage("contactus")}
    href="#contactus">
        {children}
    </AnchorLink>
)
}

export default ActionButton