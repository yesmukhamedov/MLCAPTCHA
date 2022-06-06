import React from "react";
export interface TouchProps {
    children: React.ReactNode;
    store: any;
    action: any;
}
declare const Touch: React.FC<TouchProps>;
export default Touch;
