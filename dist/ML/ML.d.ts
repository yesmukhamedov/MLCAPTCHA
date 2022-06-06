import * as React from 'react';
import { default as Paginator } from './Paginator/Paginator';
import { default as Tracker } from './Tracker/Tracker';
import { default as Verifier } from './Verifier/Verifier';
export interface MLP {
    [key: string]: any;
}
interface MLC extends React.FC<MLP> {
    Paginator: typeof Paginator;
    Tracker: typeof Tracker;
    Verifier: typeof Verifier;
}
declare const ML: MLC;
export default ML;
