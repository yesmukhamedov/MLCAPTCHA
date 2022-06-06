import React from "react";
import './Verifier.css';
export interface VerifyProps {
    [key: string]: any;
    store: any;
    action: any;
    lang: string;
    hash: (newHash: string) => boolean;
    onSuccess?: () => void;
    onFail?: () => void;
}
declare const Verifier: React.FC<VerifyProps>;
export default Verifier;
