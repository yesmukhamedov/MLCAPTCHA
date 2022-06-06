import React, { FC } from "react";

export interface LayerProps {
    reply: boolean;
    replay: () => void;

    lang: string;

    success: () => void;
    error: () => void;
}

export interface BaseProps {
    example: number;
    variant: number[];
    isRight: number[];
}

const ColorRecognition : React.FC<LayerProps> = (
    {
        reply,
        replay,

        lang,

        success,
        error,
    }) => {

    const initialAnswer: number[] = [];
    const [customAnswer, formCustomAnswer] = React.useState(initialAnswer);

    const messages = {
        task: lang && lang==='en'? 'Select all squares with a similar color to this: ' : lang==='ru'? 'Выберите все квадраты с похожим цветом: ' : 'Осыған ұқсас түсі бар барлық шаршыларды таңдаңыз:',
    };

    const emptyBase: BaseProps = {
        example: Math.floor(Math.random() * 3),
        variant: [],
        isRight: [],
    };

    const [base, formBase] = React.useState(emptyBase);

    React.useEffect(()=>{
        baseReader();
    }, [base.example]);

    React.useEffect(()=>{
        if(reply){
            if(customAnswer.length){
                if(customAnswer.length === base.isRight.length){
                    const errors = customAnswer.filter(item=>!base.isRight.includes(item));
                    if(errors.length){
                        baseReader();
                        formCustomAnswer([]);
                        error();
                    } else {
                        formCustomAnswer([]);
                        success();
                    }
                } else {
                    baseReader();
                    formCustomAnswer([]);
                    error();
                }
            } else {
                replay();
            }
        }
    }, [reply])

    function baseReader(){
        let rights: number[] = []
        let variants: number[] = []
        if(base.example || base.example===0){
            for(let i=0; i<12; i++){
                const randNum = Math.floor(Math.random() * 3);
                if(randNum===base.example)
                    rights = [...rights, i];
                variants = [...variants, randNum];//randNum? randNum===1? 'red' : 'blue' : 'green'
            }
            formBase({
                example: base.example,
                variant: variants,
                isRight: rights,
            })
        }
    }

    const calcule = (x: number, y: number) => 4*x+y;
    return (
        <div style={{width: '100%', height: '100%', background: 'rgb(26 115 232)'}}>
            <table style={{width: '100%', height: '100%', border: 2}}>
                <tbody>
                <tr>
                    <td
                        style={{
                            width: 215,
                            height: 69,
                            boxSizing: 'border-box',
                            textAlign: 'left',
                            alignItems: 'top',
                            padding: 5
                        }}
                    >
                        <div
                            style={{
                                marginTop: 7,
                                paddingLeft: 14,
                                // width: '100%',
                                // height: '100%',
                            }}>
                                <span
                                    style={{
                                        color: 'white',
                                        // fontWeight: 'bold'
                                    }}
                                >{messages.task}</span>
                        </div>
                    </td>
                    <td
                        style={{
                            width: 69,
                            height: 69,
                            boxSizing: 'border-box',
                            padding: 14
                        }}
                    >
                        <div
                            style={{
                                // width: '100%',
                                height: '100%',
                                background: `${base.example? base.example===1? 'red' : 'blue' : 'green'}`
                            }}>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <table style={{width: '100%', height: '100%', border: 2}}>
                <tbody>
                {[0, 1, 2].map((i:number, x:number)=>(
                    <tr key={x}>
                        {[0, 1, 2, 3].map((d:number, y:number)=>{
                            return (
                                <td
                                    key={y}
                                    style={{
                                        width: 69,
                                        height: 69,
                                        boxSizing: 'border-box',
                                        padding: customAnswer.includes(4*x+y)? '14px' : '7px'}}
                                    onClick={()=>{
                                        formCustomAnswer(customAnswer.includes(4*x+y)
                                            ? customAnswer.filter(id=>id!==4*x+y)
                                            : [...customAnswer, 4*x+y])}}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            background: `${base.variant[4*x+y]? base.variant[4*x+y]===1? 'red' : 'blue' : 'green'}`
                                        }}>
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ColorRecognition;