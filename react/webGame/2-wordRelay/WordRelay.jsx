const { useState, useRef } = require('react');
const React = require('react');

const WordRelay = () => {
    const [word, setWord] = useState('단비2');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const input = useRef();

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
        }else{
            setResult('땡');
            setValue('');
        }
        input.current.focus();
    }

    return (
    <>
        <h1>{word}</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="wordInput">얍</label>
            <input id="wordInput" className="wordInput" ref={input} type="text" value={value} onChange={onChange}/>
            <button>입력</button>
        </form>
        <p>
            {result}
        </p>
    </>);
}

module.exports = WordRelay;