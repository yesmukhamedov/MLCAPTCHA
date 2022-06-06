import React from 'react';
import './Success.css';

export interface SuccessProps {
    [key: string]: any;
}

const Success: React.FC<SuccessProps> = () => {

    React.useEffect(()=>{
        // const tool = document.getElementById('tool');
        // tool.classList.toggle('tool');
    }, []);

    return (
        <>
            <input type="checkbox" id="cbtest-success" checked readOnly/>
            <label htmlFor="cbtest-success" className="check-box-success" id={"check-box-success"}></label>
        </>
    );
}

export default Success;