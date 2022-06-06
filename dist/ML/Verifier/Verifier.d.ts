import React from "react";
import './Verifier.css';
export interface VerifyProps {
    hash?: (newHash: string) => boolean;
    onSuccess?: () => void;
}
declare const Verifier: React.FC<VerifyProps>;
export default Verifier;
