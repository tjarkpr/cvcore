import React, { ReactNode } from "react";
import "./element_container.css";


export const ElementContainer: React.FC<{
    children: ReactNode
}> = (props) => (
    <div className="element_container">
        {props.children}
    </div>
);