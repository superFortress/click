/* I M P O R T */

/* Module */
import React, { PureComponent } from 'react';

/* Component */
import Button from './Button';
import Control from './Control';
import Debug from './Debug';

/* E X P O R T */

export default class App extends PureComponent {

    /* Constructor */
    constructor() {
        super();
        // state
        this.state = {
            render: {
                cycle: 0,
            },
            click: {
                count: 0,
                last: 0,
                state: false,
            },
            down: {
                state: false,
            },
            hold: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
                timeout: null,
            },
            hover: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
            },
            repeat: {
                count: 0,
                duration: 0,
                last: 0,
                state: false,
                timeout: null,
            },
            up: {
                duration: 0,
                last: 0,
            },
        }
    }

    /* ƒ: General */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.render === this.state.render) {
            this.setAppState({ render: { cycle: this.state.render.cycle + 1 }});
        }
    }

    /* ƒ: App */
    setAppState = (object) => {
        for (const key in object) {
            this.setState(prevState => ({
                [key]: {
                    ...prevState[key],
                    ...object[key],
                }
            }));
        }
    }

    /* Render */
    render() {
        const action = { setAppState: this.setAppState };
        return (
            <div className="App">
                <Button {...this.state} action={action} />
                <Control {...this.state} action={action} />
                <Debug {...this.state} />
            </div>
        );
    }
}
