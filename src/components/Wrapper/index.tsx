import React from "react";

import styles from "./Wrapper.module.css";

interface Props {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
}

export function Wrapper({ children, style }: Props) {
    return (
        <div
            style={style}
        >
            {children}
        </div>
    );
}
