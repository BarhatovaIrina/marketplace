import './ProductRow.css';
function ProductRow(props) {
    const { brand, title, images, price } = props
    return (
        <div className="product">
            <h3 className="product_title">Title: {title}</h3>
            <p>Brand:{brand}</p>
            <div className='product_images'>
                {images.map((item, index) => (
                    <img key={index} className='product_img' src={item} alt='image_product' />
                ))}
            </div>
            <p>Price: {price}</p>
        </div>
    );
}
export default ProductRow;