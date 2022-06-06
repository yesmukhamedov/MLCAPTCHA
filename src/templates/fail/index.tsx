import React from 'react';
import './Fail.css';

export interface FailProps {
    [key: string]: any;
}

const Fail: React.FC<FailProps> = () => {

    return (
        <>
            <input type="checkbox" id="cbtest-fail" checked readOnly/>
            <label htmlFor="cbtest-fail" className="check-box-fail" id={"check-box-fail"}></label>
        </>
    );
}

export default Fail;