import React, {FC, ReactNode} from 'react';
import {CheckSumGenerator, Matrix, RandomForest} from "../functions";

export interface PaginatorProps {
    // [key: string]: any;
    children: React.ReactNode;
    store: any;
    action: any;

    hash: (newHash: string)=> boolean;
    patencyRules?: number;
    onSuccess?: ()=> void;
    onFail?: ()=>void;
}

const Paginator: React.FC<PaginatorProps> = ({
                                             hash,
                                                 patencyRules,
                                                 action, store,
                                            onSuccess,
                                             onFail,
                                            children,
                                            ...props
                                        }) => {

    function click() {
        //onSuccess && onSuccess();

        // для использование patencyRules(правила проходимости) нужно чтобы
        // рандом форест возвращал число
        // от которого мы будем отталковаться при решении,
        // то есть patencyRules это процент например 60%
        // тогда пользователи не достигшие до 60 считается роботами или спамеры


        if(hash(CheckSumGenerator.calcSHA1FromByte([...store.cursor, ...store.scrollbar, ...store.touch]))){
            if(RandomForest(store.cursor) && RandomForest(store.scrollbar) && RandomForest(store.touch)){
                onSuccess && onSuccess();
            } else {
                onSuccess && onSuccess();
                // onFail && onFail();
            }
        } else {
            onFail && onFail();
        }
    }

    return (
        <div
            {...props}
            className={'paginator'}
            onClick={()=>click()}
        >
            {children}
        </div>
    );
}

export default Paginator;