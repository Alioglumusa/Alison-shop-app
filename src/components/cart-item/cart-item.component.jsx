import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name"> {name}</span>
        <div className="price-container">
        <span className="price">
          {quantity} x ${price}
        </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
