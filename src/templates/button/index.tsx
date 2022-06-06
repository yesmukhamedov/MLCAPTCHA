import React, {ReactNode} from 'react';
import './Button.css';

export interface ButtonProps {
    [key: string]: any;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {

    return (
        <a {...props} href="#" className="btn btn-default">{children}</a>
    );
}

export default Button;

/*
<button
            className={'button'}
            {...props}
        >
            {children}
        </button>
 */