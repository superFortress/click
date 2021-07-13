/* I M P O R T */

/* Module */
import React, {PureComponent} from "react";

/* Style */
import '../style/button.css';

/* E X P O R T */

export default class Button extends PureComponent {

    /* Constructor */
    constructor(props) {
        super(props);
    }

    /* f: General */
    componentDidUpdate(prevProps) {
        const props = this.props;
        const { action } = props;
        if (prevProps.click.state === true) {
            
        }
        if (prevProps.down.state === true) {
            action.setAppState({ repeat: { count: 99 }});
        }
    }

    /* Render */
    render() {
        const { action } = this.props;
        return (
            <div className="button"
                onMouseDown={() => {
                    action.setAppState({
                        click: { state: true },
                        down: { state: true },
                    });
                }}
                onMouseEnter={() => {
                    action.setAppState({
                        hover: { state: true },
                    });
                }}
                onMouseLeave={() => {
                    action.setAppState({
                        hover: { state: false },
                    });
                }}
                onMouseUp={() => {
                    action.setAppState({
                        down: { state: false },
                    });
                }}
            >
                <div className="button-top">
                    <p>CLICK ME</p>
                </div>
                <div className="button-bottom" />
            </div>
        );
    }
}