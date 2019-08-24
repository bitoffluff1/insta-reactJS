import React, {Component, useState} from 'react';

const mapping = {
    plus: 1,
    minus: -1,
};

/*export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleButtonClick = (event) => {
        this.setState((prevState) => ({
            counter: prevState.counter + mapping[event.target.name],
        }));
    };

    render() {
        return (
            <div>
                <button name="minus" onClick={this.handleButtonClick}>-</button>
                {this.state.counter}
                <button name="plus" onClick={this.handleButtonClick}>+</button>
            </div>
        );
    }
}*/

export function Counter() {
    const [count, setCount] = useState(0);

    const handleButtonClick = ({ target: { name } }) => setCount(count + mapping[name]);

    return (
        <div>
            {count > 0 && <button name="minus" onClick={handleButtonClick}>-</button>}
            {count}
            <button name="plus" onClick={handleButtonClick}>+</button>
        </div>
    );
}