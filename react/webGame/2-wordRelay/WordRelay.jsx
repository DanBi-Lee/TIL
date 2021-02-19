const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        word : '단비2',
        value : '',
        result : '',
    };

    onChange = (e) => {
        this.setState({
            value : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length-1] === this.state.value[0]){
            this.setState(prev => {
                return  {
                result : '딩동댕',
                value : '',
                word : prev.value
                }
            });
        }else{
            this.setState({
                result : '땡',
                value : '',
            });
        }
        this.input.focus();
    }

    input;

    onRefInput = (c) => {
        this.input = c;
    }

    render (){
        return <>
            <h1>{this.state.word}</h1>
            <form onSubmit={this.onSubmit}>
                <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChange}/>
                <button>입력</button>
            </form>
            <p>
                {this.state.result}
            </p>
        </>;
    }
}

module.exports = WordRelay;