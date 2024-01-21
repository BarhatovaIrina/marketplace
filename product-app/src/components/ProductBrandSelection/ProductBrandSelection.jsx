import './ProductBrandSelection.css';

function ProductBrandSelection(props) {
    const brands = [...new Set(props.data.map(item => item.brand))]

    const handleChangeBrand = (e) => {
        const selectedBrand = e.target.innerHTML;
        props.selectBrand(selectedBrand)
    }
    return (
        <div className="productTable">
            <h1>Choose brand</h1>
            <div className='brands'>
                {brands.map((item, index) => {
                    return <span className='brand' key={index} onClick={handleChangeBrand}>{item}</span>
                })}
            </div>
        </div>
    );
}
export default ProductBrandSelection;