import './ProductRow.css';
import img_del from '../../images/del.png'
import img_like from '../../images/like1.png'

function ProductRow(props) {
    const { brand, title, images, price, id, setLike, liked, setDelete } = props

    return (
        <div className={`product ${liked ? 'liked' : ''}`}>
            <h3 className="product_title" > Title: {title}</h3>
            <span className='product_images_control'>
                <img src={img_like} alt='like' id={id} onClick={() => setLike(id)}></img>
                <img src={img_del} alt='del' id={id} onClick={() => setDelete(id)}></img>
            </span>

            <p>Brand:{brand}</p>
            <div className='product_images'>
                {images.map((item, index) => (
                    <img key={index} className='product_img' src={item} alt='image_product' />
                ))}
            </div>
            <p>Price: {price}</p>
        </div >
    );
}
export default ProductRow;