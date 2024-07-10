import React from "react";
import "./icon_container.css";


export const IconContainer: React.FC<{
    size_in_px: number,
    path: string,
    alt: string
}> = (props) => (
    <div className="icon_container" style={{
        'width': props.size_in_px + 'px',
        'height': props.size_in_px + 'px'
    }}>
        <img src={props.path} alt={props.alt} className="object-contain"/>
    </div>
);