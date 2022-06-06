import React from "react";

export interface WheelProps {
    children: React.ReactNode;
    store: any;
    action: any;
}

const Wheel: React.FC<WheelProps> = ({children, action, store,}) => {

    // function wheelLog(event: React.WheelEvent<HTMLDivElement>) {
    //     action({...store, wheel: [...store.wheel, {
    //             x: event.deltaX,
    //             y: event.deltaY,
    //             z: event.deltaZ,
    //             m: Date.now(),
    //             t: event.timeStamp,
    //         }]})
    // }

    return <div onWheel={event=>action({...store, wheel: [...store.wheel, {
            x: event.deltaX,
            y: event.deltaY,
            z: event.deltaZ,
            m: Date.now(),
            t: event.timeStamp,
        }]})}>{children}</div>;
}

export default Wheel;