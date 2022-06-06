import React, { FC, ReactNode } from 'react';
import { Cursor, Scrollbar, Touch } from "./Tracking";

export interface TrackerProps {
    // [key: string]: any;
    children: React.ReactNode;

    cursor?: boolean;
    scroll?: boolean;
    touch ?: boolean;
}

const Tracker: React.FC<TrackerProps> = ({
                                             children,
                                             cursor,
                                             scroll,
                                             touch,
                                            ...props
                                        }) => {

    // React.useEffect(()=> cursorTracker && console.log('CursorTracking'), [CursorTracking]);

    React.useEffect(()=>{
        if(cursor){
            console.log('CursorTracking');
        }
    }, [Cursor]);

    React.useEffect(()=>{
        if(scroll){
            console.log('ScrollbarTracking');
        }
    }, [Scrollbar]);

    React.useEffect(()=>{
        if(touch){
            console.log('TouchTracking');
        }
    }, [Touch]);

    return (
        <div
            {...props}
        >
            {children}
        </div>
    );
}

export default Tracker;