import ProductCard from "./ProductCard"
import { useState, } from 'react'
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../datas/data"
import "../styles/homepage.css"
import { CATEGORY_ICONS } from "../datas/data"


const HomePage = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(CATALOG.map(i => i.category)))];

    const filtered = activeFilter === "All"
        ? CATALOG
        : CATALOG.filter(i => i.category === activeFilter);

    const grouped = {};
    for (let i = 0; i < filtered.length; i++) {
        const item = filtered[i];
        const category = item.category;

        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(item);
    }

    return (
        <div className="home-wrap">
            <div className="home-header">
                <h1>Browse Catalog</h1>
                <p>{CATALOG.length} items across {categories.length - 1} categories</p>
            </div>

            <div className="filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat !== "All" && CATEGORY_ICONS[cat] + " "}
                        {cat}
                    </button>
                ))}
            </div>

            {Object.entries(grouped).map(([cat, items]) => (
                <div className="category-section" key={cat}>
                    <div className="category-label">
                        <h2>{CATEGORY_ICONS[cat]} {cat}</h2>
                        <span className="cat-count">{items.length} items</span>
                        <div className="category-line" />
                    </div>
                    <div className="product-grid">
                        {items.map((item, idx) => (
                            <ProductCard key={idx} item={item} onClick={() => navigate(`/item/${item.itemname}`)} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default HomePage