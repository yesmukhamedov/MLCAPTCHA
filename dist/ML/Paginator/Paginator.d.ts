import React from 'react';
export interface PaginatorProps {
    children: React.ReactNode;
    hash?: (newHash: string) => boolean;
    onSuccess?: () => void;
}
declare const Paginator: React.FC<PaginatorProps>;
export default Paginator;
