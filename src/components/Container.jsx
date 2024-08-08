import Flex from "./Flex"

export default({children,...props})=>{
    const classes=["w-[85%] mx-auto h-full",props.className].join(" ")
    return props.flex ? (
        <Flex {...props} className={classes}>
            {children}
        </Flex>
    ) :(
        <div>
            {children}
        </div>
    )
}