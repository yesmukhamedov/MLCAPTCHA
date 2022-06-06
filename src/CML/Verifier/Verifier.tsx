import React, {FC} from "react";
import { Checkbox, Loading, Success, Button } from '../../templates'
import LayerRecognition from "./tests/LayerRecognition";
import PhotoRecognition from "./tests/PhotoRecognition";

import './Verifier.css';

export interface VerifyProps {
    // [key: string]: any;
    hash?: (newHash: string)=> boolean;
    onSuccess?: ()=>void;
}

const Verifier: React.FC<VerifyProps> = ({onSuccess, hash}) => {

    const [state, setState] = React.useState({
        status: 'OPEN', // OPEN PROCESS SUCCESS
        display: 'none',
        send: false
    });

    React.useEffect(()=>{
        setState({...state, display: (state.status==='PROCESS')? "block" : "none"});
    }, [state.status]);

    function setStatus(newStatus: string){
        setState({...state, status: newStatus});
    }

    function checkUniqueness() {
        // if(getHashList().includes('0000')){
        //     setState({...state, display: "block"});
        // } else {
        //     setStatus('SUCCESS')
        // }
    }

    function clickConfirm() {
        switch (state.status) {
            case "OPEN":
                setStatus('PROCESS');
                checkUniqueness();
                break;
            case "PROCESS":
                setStatus('OPEN');
                break;
            default :
                setStatus(state.status);
        }
    }

    function displayButton(state: string) {
        switch (state) {
            case "OPEN":
                return <Checkbox />
            case "PROCESS":
                return <Loading />
            case "SUCCESS":
                return <Success />
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

    // @ts-ignore
    return (
        <div
            className={`segment`}
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
                        I`m not a Robot
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
                <PhotoRecognition
                    reply={state.send}
                    error={()=>setState({...state, send: false})}
                    success={()=>{
                        onSuccess && onSuccess();
                        setStatus('SUCCESS');
                    }}
                />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                    <Button
                        onClick={()=>setState({...state, send: true})}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Verifier;