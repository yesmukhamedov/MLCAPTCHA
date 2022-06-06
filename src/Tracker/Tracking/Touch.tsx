import React from "react";

export interface TouchProps {
    children: React.ReactNode;
    store: any;
    action: any;
}

const Touch: React.FC<TouchProps> = ({children, action, store,}) => {

    return <div onTouchMove={event=>action({...store, touch: [...store.touch, {
            x: event.touches[0].pageX,
            y: event.touches[0].pageY,
            m: Date.now(),
            t: event.timeStamp,
            rX: event.nativeEvent.touches[0].radiusX,
            rY: event.nativeEvent.touches[0].radiusY,
            f: event.nativeEvent.touches[0].force
        }]})}>{children}</div>;
}

export default Touch;