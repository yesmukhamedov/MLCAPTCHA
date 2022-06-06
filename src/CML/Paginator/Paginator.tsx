import React, {FC, ReactNode, useContext} from 'react';
import {Context} from "../CML";

export interface PaginatorProps {
    // [key: string]: any;
    children: React.ReactNode;
    // action: ()=> void;

    hash?: (newHash: string)=> boolean;
    onSuccess?: ()=> void;
}

const Paginator: React.FC<PaginatorProps> = ({
                                             hash,
                                            onSuccess,
                                            children,
                                                 // action,
                                                 ...props
                                        }) => {

    // const [state, setState] = React.useState({
    //     loading: false
    // })

    function checkUniqueness() {
        // if(getHashList().includes('0000')){
        //     console.log('You are Robot')
        // } else {
        //     setState({...state, loading: false})
        // }
    }

    const {status} =  React.useContext(Context);
    return (
        <div
            {...props}
            className={'pagination'}
            onClick={()=>checkUniqueness()}
        >
            {children}
        </div>
    );
}

export default Paginator;