import React from "react";

export interface CursorProps {
    children: React.ReactNode;
    store: any;
    action: any;
}

const Cursor: React.FC<CursorProps> = ({children, action, store,}) => {

    return <div onPointerMove={event=>action({...store, cursor: [...store.cursor, {
            x: event.pageX,
            y: event.pageY,
            m: Date.now(),
            t: event.timeStamp,
        }]})}>{children}</div>;
}

export default Cursor;