export default({product})=>{
    return(
        <div className="!h-[580px] [&>img]:h-full">
            <img src={product.image} alt="you cant see this" />
        </div>
    )
}