import AnchorLink from "react-anchor-link-smooth-scroll"



type Props = {
    page: string
    selectedPage:string
    setSelectedPage: (value: string) => void
}

const Link = ({page , selectedPage , setSelectedPage }: Props) => {
    const lowerCase = page.toLowerCase().replace(/ /, "")
return (
    <AnchorLink className={`${lowerCase === selectedPage ?"text-primary-500": ""} 
    transition duration-500 hover:text-primary-300 cursor-pointer`}
    href={`#${lowerCase}`}
    onClick={()=>setSelectedPage(lowerCase)}>
        {page}
    </AnchorLink>
)
}

export default Link