import React from "react";
export interface ScrollbarProps {
    children: React.ReactNode;
    store: any;
    action: any;
}
declare const Scrollbar: React.FC<ScrollbarProps>;
export default Scrollbar;
