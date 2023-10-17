import ProductItem from "./ProductItem";

const Product=(props)=>{
    return (
        <div className="box flex justify-center items-center gap-y-5 bg-yellow-300 px-10  flex-col">
            <ProductItem
                title={props.items[0].name}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
              <ProductItem
                title={props.items[1].name}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ProductItem
                title={props.items[2].name}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ProductItem
                title={props.items[3].name}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
          
        </div>

    );
}

export default Product;
