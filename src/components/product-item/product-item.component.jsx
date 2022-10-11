

const ProductItem = ({ product }) => {
  return(
    <div key={product.id} className="product-container">
      <img src = {`${product.thumbnail}`}/>
      <div className="category-body-container">
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default ProductItem
