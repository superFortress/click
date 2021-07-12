/* I M P O R T */

/* Module */
import React from "react";

/* Style */
import '../style/button.css';

/* E X P O R T */

export default function Button(props) {
    return (
        <div className="button">
            <div className="button-top">
                <p>CLICK ME</p>
            </div>
            <div className="button-bottom" />
        </div>
    );
}