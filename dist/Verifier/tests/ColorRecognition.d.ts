import React from "react";
export interface LayerProps {
    reply: boolean;
    replay: () => void;
    lang: string;
    success: () => void;
    error: () => void;
}
export interface BaseProps {
    example: number;
    variant: number[];
    isRight: number[];
}
declare const ColorRecognition: React.FC<LayerProps>;
export default ColorRecognition;
