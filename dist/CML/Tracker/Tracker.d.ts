import React from 'react';
export interface TrackerProps {
    children: React.ReactNode;
    cursor?: boolean;
    scroll?: boolean;
    touch?: boolean;
}
declare const Tracker: React.FC<TrackerProps>;
export default Tracker;
