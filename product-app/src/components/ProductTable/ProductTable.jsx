import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, addLike, removeLike, deleteProduct } from '../../store/actions';
import ProductBrandSelection from '../ProductBrandSelection/ProductBrandSelection';

function ProductTable(props) {
    const { filterLike, filterBrand } = props
    const dispatch = useDispatch();
    const { products, isLoading, likedProducts } = useSelector(state => state)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [brand, setBrand] = useState('Apple')

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        filterProducts()
    }, [brand, products])

    const handleSelectBrand = (value) => {
        setBrand(value)
    }
    const filterProducts = () => {
        const arr = products.filter(item => item.brand === brand);
        setFilteredProducts(arr);
    }

    const getProducts = async () => {
        await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((res) => {
                dispatch(addProducts({ isLoading: true, products: res.products }))
                filterProducts()
            })
            .catch((error) => {
                console.log(error)
                dispatch(addProducts({ isLoading: true, products: [] }));
            })
    }
    const deleteProductById = (value) => {
        const foundProduct = products.find(product => product.id === value);
        if (foundProduct) {
            dispatch(deleteProduct(value))
        }
        else
            console.log('error, not found id')
    }
    const updateLike = (value) => {
        if (!likedProducts.includes(value)) {
            dispatch(addLike(value))
        }
        else {
            dispatch(removeLike(value))
        }
    }

    if (!isLoading)
        return 'Loading'

    return (
        <div className='productTable'>
            <h1> {!filterLike ? 'Product Table' : 'Liked-Product Table'}</h1>
            {filterBrand ? (
                <>
                    <ProductBrandSelection data={products} selectBrand={handleSelectBrand} />
                    {
                        filteredProducts.map((item) =>
                            (<ProductRow key={item.id} setDelete={deleteProductById} setLike={updateLike} liked={likedProducts.includes(item.id)} id={item.id} title={item.title} brand={item.brand} price={item.price} images={item.images} />))
                    }
                </>
            ) :
                (
                    <>
                        {
                            !filterLike ?
                                products.map((item) => {
                                    return <ProductRow key={item.id} setDelete={deleteProductById} setLike={updateLike} liked={likedProducts.includes(item.id)} id={item.id} title={item.title} brand={item.brand} price={item.price} images={item.images} />
                                }) :

                                products.map((item) => (likedProducts.includes(item.id) &&
                                    <ProductRow key={item.id} setDelete={deleteProductById} setLike={updateLike} liked={likedProducts.includes(item.id)} id={item.id} title={item.title} brand={item.brand} price={item.price} images={item.images} />
                                ))
                        }
                    </>
                )}

        </div>
    );
}
export default ProductTable;