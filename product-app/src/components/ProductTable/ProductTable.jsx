import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';
// import data from '../../data.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../store/actions';
import store from '../../store/store';

function ProductTable() {
    // const [data, setData] = useState([])
    const dispatch = useDispatch();
    const { products } = useSelector(state => state)
    // console.log(store.getState())
    useEffect(() => {
        getProducts();
        console.log(products[0])
    }, [])

    const getProducts = async () => {
        await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((res) => {
                dispatch(addProducts(res.products));
                // setData(res.products)
                // console.log(res.products)
                console.log(products)
            })
            .catch((error) => {
                console.log(error)
                // dispatch(addProducts({ loaded: true, products: [] }));

            })
    }


    // if (!isLoading)
    //     return 'Loading'

    return (
        <div className="productTable">
            <h1>Product Table</h1>
            {
                products[0].map((item) => {
                    return <ProductRow key={item.id} title={item.title} brand={item.brand} price={item.price} images={item.images} />
                })
            }

        </div>
    );
}
export default ProductTable;