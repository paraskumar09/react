import ProductDate from "./ProductDate";

const ProductItem=(props)=>{
    return(
        <div className="Product_item flex justify-between gap-x-32 bg-cyan-500 px-10"> 
            <ProductDate date={props.date}></ProductDate>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ProductItem;