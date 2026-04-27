import "../styles/productcard.css"

const ProductCard = ({ item, onClick }) => {
    return (
        <div className="product-card" onClick={() => onClick()}>
            <div className="card-img-wrap">
                <img
                    src={item.image}
                    alt={item.itemname}
                    onError={e => { e.target.src = `https://placehold.co/400x200/f0efeb/aaa?text=${encodeURIComponent(item.itemname)}`; }}
                />
            </div>
            <div className="card-body">
                <div className="card-name">{item.itemname}</div>
                <span className="card-cat-tag">{item.category}</span>
                <div className="card-props">
                    {item.itemprops.slice(0, 3).map((p, i) => (
                        <span className="card-prop-pill" key={i}>{p.label}: {p.value}</span>
                    ))}
                    {item.itemprops.length > 3 && (
                        <span className="card-prop-pill">+{item.itemprops.length - 3} more</span>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProductCard