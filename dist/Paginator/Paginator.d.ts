import React from 'react';
export interface PaginatorProps {
    children: React.ReactNode;
    store: any;
    action: any;
    hash: (newHash: string) => boolean;
    patencyRules?: number;
    onSuccess?: () => void;
    onFail?: () => void;
}
declare const Paginator: React.FC<PaginatorProps>;
export default Paginator;
