import React from 'react';

function GuGuDan () {
    const [num1, setNum1] = React.useState(Math.ceil(Math.random()*9));
    const [num2, setNum2] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const $input = React.useRef();

    const onChangeInput = (e) => {
        setValue(e.target.value);
        setValue(()=>e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(value) === num1*num2){
            setResult(`정답 : ${num1*num2}`);
            setNum1(Math.ceil(Math.random()*9));
            setNum2(Math.ceil(Math.random()*9));
            setValue('');
        }else{
            setResult('땡');
            setValue('');
        }
        $input.current.focus();
    };

    console.log('렌더링');

    return <>
    <div>{num1} 곱하기 {num2} 는?</div>
    <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChangeInput} ref={$input} />
        <button>입력</button>
    </form>
    <p>{result}</p>
</>;
}

export default GuGuDan;