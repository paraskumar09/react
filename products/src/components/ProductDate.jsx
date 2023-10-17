
const ProductDate=(props)=>{
    const month=props.date.toLocaleString('en-US', { month: 'long' });
    const date=props.date.getDate();
    const year=props.date.getFullYear();
    console.log(month);
    console.log(date);
    console.log(year);
    return (
        <div className="product_date">
        <div className="product_date_month">{month}</div>
        <div className="product_date_year">{year}</div>
        <div className="product_date_day">{date}</div>
    </div>
    );

}
export default ProductDate;