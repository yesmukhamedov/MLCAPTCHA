import React from "react";

export interface ScrollbarProps {
    children: React.ReactNode;
    store: any;
    action: any;
}

const Scrollbar: React.FC<ScrollbarProps> = ({children, action, store,}) => {

    window.onscroll = (e)=>scrollLog(e);

    function scrollLog(event: any) {
        action({...store, scrollbar: [...store.scrollbar, {
                h: event.target.scrollingElement.scrollTop,
                m: Date.now(),
                t: event.timeStamp,
            }]})
    }

    return <div onScroll={e=>scrollLog(e)}>{children}</div>;
}

export default Scrollbar;