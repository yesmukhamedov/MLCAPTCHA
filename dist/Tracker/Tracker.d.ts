import React from 'react';
export interface TrackerProps {
    [key: string]: any;
    children: React.ReactNode;
    store: any;
    action: any;
    assumption: (assumption: object) => void;
    cursor?: boolean;
    scroll?: boolean;
    touch?: boolean;
    wheel?: boolean;
}
declare const Tracker: React.FC<TrackerProps>;
export default Tracker;
