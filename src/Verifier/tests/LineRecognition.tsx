import React, { FC } from "react";

export interface LayerProps {
    success: () => void
}

const LineRecognition : React.FC<LayerProps> = (
    {
        success
    }) => {

    const test = 'ReCAPCHA';
    const rightAnswer = 'success';

    const [customAmswer, formCustomAnswer] = React.useState([]);

    return (
        <>
            <div>ReCAPCHA</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                <button
                    onClick={()=>success()}
                >
                    Send
                </button>
            </div>
        </>
    );
}

export default LineRecognition;