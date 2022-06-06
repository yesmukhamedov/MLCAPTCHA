import React, { FC, ReactNode } from 'react';
import {Cursor, Scrollbar, Touch, Wheel} from "./Tracking";

export interface TrackerProps {
    [key: string]: any;
    children: React.ReactNode;
    store: any;
    action: any;

    assumption: (assumption: object)=>void;

    cursor?: boolean;
    scroll?: boolean;
    touch ?: boolean;
    wheel ?: boolean;
}

const Tracker: React.FC<TrackerProps> = ({
                                             children,
                                             cursor,
                                             action, store,
                                             assumption,
                                             scroll,
                                             touch,wheel,
                                            ...props
                                        }) => {

    function Wrapper(element: React.FC) {

    }

    return (
        <Cursor store={store} action={action}>
            <Scrollbar store={store} action={action}>
                <Wheel store={store} action={action}>
                    <Touch store={store} action={action}>
                        <div{...props}>{children}</div>
                    </Touch>
                </Wheel>
            </Scrollbar>
        </Cursor>
    );
}

export default Tracker;