import './FilterableProductTable.css';

import data from '../../data.json';
import { useState, useEffect } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import ProductBrandSelection from '../ProductBrandSelection/ProductBrandSelection';

function FilterableProductTable() {
    const [brand, setBrand] = useState('Apple')
    const [filteredProducts, setFilteredProducts] = useState(data)

    const handleSelectBrand = (value) => {
        setBrand(value)
    }

    useEffect(() => {
        const arr = data.filter(item => item.brand === brand);
        setFilteredProducts(arr);
    }, [brand]);

    return (
        <div className='productTable'>
            <ProductBrandSelection data={data} selectBrand={handleSelectBrand} />

            <div>
                {filteredProducts.map((item) => (
                    <ProductRow
                        key={item.id}
                        title={item.title}
                        brand={item.brand}
                        price={item.price}
                        images={item.images}
                    />
                ))}
            </div>

        </div>
    );
}
export default FilterableProductTable;