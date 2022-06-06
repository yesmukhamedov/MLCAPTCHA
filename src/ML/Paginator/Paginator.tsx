import React, {FC, ReactNode} from 'react';

export interface PaginatorProps {
    // [key: string]: any;
    children: React.ReactNode

    hash?: (newHash: string)=> boolean;
    onSuccess?: ()=> void;
}

const Paginator: React.FC<PaginatorProps> = ({
                                             hash,
                                            onSuccess,
                                            children,
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