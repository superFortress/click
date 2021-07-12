/* I M P O R T */

/* Module */
import React, {PureComponent} from "react";

/* Component */
import Button from './Button';

/* Style */
import '../style/app.css';

/* E X P O R T */

export default class App extends PureComponent {

    /* Constructor */
    constructor() {
        super();
        // state
        this.state = {
            click: 0,
        }
    }

    /* Render */
    render() {
        return (
            <div className="App">
                <Button />
            </div>
        );
    }
}
