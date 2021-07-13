/* I M P O R T */

/* Module */
import React, { useEffect } from "react";

/* Style */
import '../style/button.css';

/* E X P O R T */

export default function Button({ action, click, down, hold, hover, repeat, up }) {

    /* Variable */
    const { setAppState } = action;

    /* f: General */
    useEffect(() => {
        if (click.state === true) {
            setAppState({ click: { count: click.count + 1, state: false }})
        };
    }, [click, down, hold, hover, repeat, up]);

    /* Render */
    return (
        <div className="button"
            onMouseDown={() => {
                setAppState({
                    click: { state: true },
                    down: { state: true },
                });
            }}
            onMouseEnter={() => {
                setAppState({
                    hover: { state: true },
                });
            }}
            onMouseLeave={() => {
                setAppState({
                    hover: { state: false },
                });
            }}
            onMouseUp={() => {
                setAppState({
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