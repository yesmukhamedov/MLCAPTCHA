import React from "react";
export interface CursorProps {
    children: React.ReactNode;
    store: any;
    action: any;
}
declare const Cursor: React.FC<CursorProps>;
export default Cursor;
