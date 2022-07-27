import React from "react";
import Star from "../../img/star.png"


export default function Card(props) {

    let badgeValue
    if (props.item.openSpots === 0) {
        badgeValue = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeValue = "ONLINE"
    }

    return (
        <div className="card">
            {badgeValue && <div className="card--badge">{badgeValue}</div>} 
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">{props.item.price}</span> / person</p>
        </div>
    )
}


// this expression {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
// means that the <div> element will only render if props.openSpots value equals 0 