import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';
import data from '../../data.json';

function ProductTable() {
    return (
        <div className="productTable">
            <h1>Product Table</h1>
            {
                data.map((item) => {
                    return <ProductRow key={item.id} title={item.title} brand={item.brand} price={item.price} images={item.images} />
                })
            }

        </div>
    );
}
export default ProductTable;