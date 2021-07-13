/* I M P O R T */

/* Module */
import React, {PureComponent} from "react";

/* Component */
import Button from './Button';
import Debug from './Debug';

/* Style */
import '../style/app.css';

/* E X P O R T */

export default class App extends PureComponent {

    /* Constructor */
    constructor() {
        super();
        // state
        this.state = {
            click: {
                count: 0,
                last: 0,
                state: false,
                timeout: 0,
            },
            down: {
                state: false,
            },
            hold: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
                timeout: 0,
            },
            hover: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
                timeout: 0,
            },
            repeat: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
                timeout: 0,
            },
            up: {
                duration: 0,
                last: 0,
            },
        }
    }

    /* f: App */
    setAppState = (state) => {
        this.setState(prevState => {
            let nextState = {};
            function getObject(state, prevState, nextState) {
                if (typeof state === 'object') {
                    for (const key in state) {
                        if (prevState[key] !== undefined) {
                            if (typeof state[key] === 'object' && state[key] !== null) {
                                nextState[key] = { ...prevState[key] };
                                getObject(state[key], prevState[key], nextState[key]);
                            } else {
                                nextState[key] = state[key];
                            }
                        }
                    }
                }
            }
            getObject(state, prevState, nextState);
            return nextState;
        })
    }

    /* Render */
    render() {
        const action = { setAppState: this.setAppState };
        return (
            <div className="App">
                <Debug {...this.state} />
                <Button {...this.state} action={action} />
            </div>
        );
    }
}
