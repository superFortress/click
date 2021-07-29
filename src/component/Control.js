/* I M P O R T */

/* Module */
import React, { PureComponent } from 'react';

/* Library */
import { getDate } from '../library/function';

/* E X P O R T */

export default class Control extends PureComponent {
    
    /* ƒ: General */
    componentDidMount() {
        this.props.action.setAppState({ up: { last: getDate() }});
    }
    componentDidUpdate(prevProps) {

        /* Variable */
        const { action, click, down, hold, hover, repeat, up } = this.props;
        const { setAppState } = action;

        /* Function */
        const didUpdate = (states) => {
            const statesUpdated = [];
            states.map(state => {
                var curr = this.props;
                var prev = prevProps;
                var path = state.split('.');
                for (let i = 0; i < path.length; i++) {
                    curr = curr[path[i]];
                    prev = prev[path[i]];
                }
                return statesUpdated.push(curr !== prev);
            })
            return statesUpdated.includes(true);
        }

        /* Condition */

        // click
        if (didUpdate(['down.state']) && down.state) setAppState({
            click: { state: true }
        })
        if (didUpdate(['click.state']) && click.state) setAppState({
            click: {
                count: click.count + 1,
                last: getDate(),
                state: false,
            }
        })

        // down
        if (didUpdate(['hover.state']) && !hover.state) setAppState({
            down: { state: false }
        })

        // hold
        if (didUpdate(['down.state']) && down.state) setAppState({
            hold: { timeout: setTimeout(() => {
                setAppState({ hold: { state: true }});
            }, 250)}
        })
        if (didUpdate(['hold.state']) && hold.state) setAppState({
            hold: {
                count: hold.count + 1,
                last: getDate(),
            }
        })
        if (didUpdate(['down.state']) && !down.state) setAppState({
            hold: {
                state: false,
                timeout: clearTimeout(hold.timeout),
            }
        })
        if (didUpdate(['hold.state']) && !hold.state) setAppState({
            hold: {
                duration: getDate() - hold.last,
                last: getDate(),
            }
        })

        // hover
        if (didUpdate(['hover.state']) && hover.state) setAppState({
            hover: {
                count: hover.count + 1,
                last: getDate()
            }
        })
        if (didUpdate(['hover.state']) && !hover.state) setAppState({
            hover: {
                duration: getDate() - hover.last,
                last: getDate(),
            }
        })

        // repeat
        if (didUpdate(['down.state']) && down.state && !repeat.state) setAppState({
            repeat: {
                last: getDate(),
                state: true
            }
        })
        if (didUpdate(['down.state']) && !down.state && repeat.state) setAppState({
            repeat: { timeout: setTimeout(() => {
                setAppState({ repeat: { state: false }});
            }, 350)}
        })
        if (didUpdate(['down.state']) && down.state && repeat.state) setAppState({
            repeat: {
                count: repeat.count + 1,
                timeout: clearTimeout(repeat.timeout)
            }
        })
        if (didUpdate(['repeat.state']) && !repeat.state) setAppState({
            repeat: {
                duration: getDate() - repeat.last,
                last: getDate(),
            }
        })

        // up
        if (didUpdate(['down.state']) && down.state) setAppState({
            up: { duration: getDate() - up.last }
        })
        if (didUpdate(['down.state']) && !down.state) setAppState({
            up: { last: getDate() }
        })

    }

    /* Render */
    render() { return <React.Fragment /> }

}