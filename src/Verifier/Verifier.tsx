import React, {FC} from "react";
import { Checkbox, Loading, Success, Fail, Button } from '../templates';
import { RandomForest, Matrix, CheckSumGenerator } from '../functions';
import { LineRecognition, ColorRecognition, LayerRecognition, PhotoRecognition} from './tests';

import './Verifier.css';

export interface VerifyProps {
    [key: string]: any;
    store: any;
    action: any;
    lang: string;
    hash: (newHash: string)=> boolean;
    onSuccess?: ()=>void;
    onFail?: ()=>void;
}

const Verifier: React.FC<VerifyProps> = ({
                                             store,
                                             action,
                                             lang,
                                             onSuccess,
                                             onFail,
                                             hash,
                                             ...props}) => {

    const [state, setState] = React.useState({
        status: 'OPEN', // OPEN PROCESS SUCCESS FAIL
        display: 'none',
        send: false
    });

    const messages = {
        title: lang && lang==='en'? 'I`m not a Robot' : lang==='ru'? 'Я не Робот' : 'Мен Құлтемір емеспін',
        send: lang && lang==='en'? 'Send' : lang==='ru'? 'Отправить' : 'Жіберу',
    };

// your byte array
//     var byteArr = ['100','101','114'];
//
//     var sha1 = CheckSumGenerator.calcSHA1FromByte(byteArr);

    // React.useEffect(()=>{
    //     setState({...state, display: (state.status==='PROCESS')? "block" : "none"});
    // }, [state.status]);

    function clickConfirm() {
        switch (state.status) {
            case "OPEN":
                // HASH
                if(hash(CheckSumGenerator.calcSHA1FromByte([...store.cursor, ...store.scrollbar, ...store.touch]))){
                    console.log('valid Hash');
                    if(RandomForest(store.cursor) && RandomForest(store.scrollbar) && RandomForest(store.touch)){
                        setState({...state, status: 'SUCCESS'});
                    } else {
                        setState({...state, status: 'PROCESS', display: 'block'});
                    }
                } else {
                    setState({...state, status: 'FAIL'});
                    onFail && onFail();
                }
                break;
            case "PROCESS":
                setState({...state, status: 'OPEN', display: 'none'})
                break;
            default :
                setState({...state, status: state.status});
        }
    }

    function displayButton(status: string) {
        switch (status) {
            case "OPEN":
                return <Checkbox />
            case "PROCESS":
                return <Loading />
            case "SUCCESS":
                return <Success />
            case "FAIL":
                return <Fail />
            default :
                return <Checkbox />
        }
    }

    const ruleStyleMainBorder = state.display==='block'
        ? {
            borderLeft: 'groove',
            borderRight: 'groove',
            borderTop: 'groove',

            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
        } : {
            borderStyle: 'groove',
            borderRadius: '5px'
        };

    // console.log('state: ', state);
    return (
        <div
            className={`segment`}
            {...props}
        >
            <div
                className={'header'}
                style={{...ruleStyleMainBorder}}
            >
                <div
                    className={'headerTitle'}
                >
                    <span
                        className={'title'}
                    >
                        {messages.title}
                    </span>
                </div>
                <div
                    className={'headerContent'}
                    onClick={clickConfirm}
                >
                    {displayButton(state.status)}
                </div>
            </div>
            <div
                className={'content'}
                style={{display: state.display}}
            >
                <ColorRecognition
                    lang={lang}
                    reply={state.send}
                    replay={()=>setState({...state, send: false})}
                    error={()=>setState({...state, send: false})}
                    success={()=>{
                        onSuccess && onSuccess();
                        setState({...state, status: 'SUCCESS', send: false, display: 'none'});
                    }}
                />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                    <Button
                        onClick={()=>setState({...state, send: true})}
                    >
                        {messages.send}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Verifier;