import { useEffect } from 'react'
import "../styles/details.css"
import { useParams, useNavigate } from "react-router-dom";

import { CATEGORY_ICONS, CATALOG } from "../datas/data";
const DetailPage = () => {

    const { itemname } = useParams();
    const navigate = useNavigate();
    const item = CATALOG.find(i => i.itemname == itemname);
    console.log(item, 'item')
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const onBack = () => {
        navigate("/")
    }
    return (
        <div className="detail-wrap">
            <button className="back-btn" onClick={onBack}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to catalog
            </button>

            <div className="detail-card">
                <img
                    className="detail-img"
                    src={item.image}
                    alt={item.itemname}
                    onError={e => { e.target.src = `https://placehold.co/800x340/f0efeb/aaa?text=${encodeURIComponent(item.itemname)}`; }}
                />
                <div className="detail-body">
                    <span className="detail-cat-tag">{CATEGORY_ICONS[item.category]} {item.category}</span>
                    <h1 className="detail-title">{item.itemname}</h1>

                    <p className="detail-props-heading">Specifications</p>
                    <div className="detail-props-grid">
                        {item.itemprops.map((prop, i) => (
                            <div className="prop-box" key={i}>
                                <div className="prop-label">{prop.label}</div>
                                <div className="prop-value">{prop.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage