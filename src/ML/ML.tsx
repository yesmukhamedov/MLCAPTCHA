import * as React from 'react'

//import Paginator from "./Paginator/Paginator";
// import Tracker from "./Tracker/Tracker";
// import Verifier from "./Verifier/Verifier";

import { default as Paginator } from './Paginator/Paginator';
import { default as Tracker } from './Tracker/Tracker';
import { default as Verifier } from './Verifier/Verifier';

export interface MLP {
    [key: string]: any;
}

interface MLC extends React.FC<MLP> {
    Paginator: typeof Paginator;
    Tracker  : typeof Tracker;
    Verifier : typeof Verifier;
}

declare const ML: MLC;
// const ML: React.FC<MLC> = (props) => {
//     console.log('props =>', props)
//     return (<></>)
// };

export default ML;
