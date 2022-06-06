import React, {FC, ReactNode} from 'react';
import './Loading.css';

export interface LoadingProps {
    [key: string]: any;
}

const Loading: FC<LoadingProps> = () => {

    return (
        <div className="lds-ring" style={{marginTop: -1, marginLeft: -1}}>
            <div style={{marginTop: -1, marginLeft: -1}}></div>
            <div style={{marginTop: -1, marginLeft: -1}}></div>
            <div style={{marginTop: -1, marginLeft: -1}}></div>
            <div style={{marginTop: -1, marginLeft: -1}}></div>
        </div>
    );
}

export default Loading;