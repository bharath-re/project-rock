function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} className="product__image" />
      <div className="product-info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <div className="product__rating">{}</div>
        </p>
      </div>
      <button className="product__button">Add to Cart</button>
    </div>
  );
}

export default Product;