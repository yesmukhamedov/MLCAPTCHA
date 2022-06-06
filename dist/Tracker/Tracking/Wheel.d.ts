import React from "react";
export interface WheelProps {
    children: React.ReactNode;
    store: any;
    action: any;
}
declare const Wheel: React.FC<WheelProps>;
export default Wheel;
