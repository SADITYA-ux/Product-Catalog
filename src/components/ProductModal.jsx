import "../style/ProductModal.css";

export default function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={product.image} alt={product.name} />

        <h2>{product.name}</h2>
        <p className="brand">Brand: {product.brand}</p>
        <p>{product.description}</p>

        <div className="modal-info">
          <span>⭐ {product.rating}</span>
          <span>${product.price.toFixed(2)}</span>
        </div>

        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Available colors:</strong> {product.colors.join(', ')}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
      </div>
    </div>
  );
}
