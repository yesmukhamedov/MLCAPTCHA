import React, { FC } from "react";

export interface LayerProps {
    success: () => void
    error: () => void
    reply: boolean
}

const PhotoRecognition : React.FC<LayerProps> = (
    {
        success,
        error,
        reply
    }) => {

    const test = 'ReCAPTCHA';
    const rightAnswer = '09';
//негізі ответ так и массив или вообще объект
    const [customAmswer, formCustomAnswer] = React.useState('09');

    React.useEffect(()=>{
        if(reply){
            if(rightAnswer===customAmswer){
                success();
            } else {
                error();
            }
        }
    }, [reply]);

    return (
        <div>ReCAPTCHA</div>
    );
}

export default PhotoRecognition;