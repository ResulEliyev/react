import { useDropdown } from "./Dropdown"

export default({children})=>{
    const { setIsOpened }=useDropdown()
    const clasdate="flex  items center "
    return(
        <button  className={clasdate}

        onClick={()=>{setIsOpened(prev => !prev)}}>
            {children}
        </button>
    )

}