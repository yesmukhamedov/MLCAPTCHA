import React from 'react';
import './Button.css';
export interface ButtonProps {
    [key: string]: any;
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
