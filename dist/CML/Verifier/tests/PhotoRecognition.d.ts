import React from "react";
export interface LayerProps {
    success: () => void;
    error: () => void;
    reply: boolean;
}
declare const PhotoRecognition: React.FC<LayerProps>;
export default PhotoRecognition;
