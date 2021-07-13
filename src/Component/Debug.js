/* I M P O R T */

/* Style */
import '../style/debug.css';

/* E X P O R T */

export default function Debug({ click, down, hold, hover, repeat, up }) {
    function isBoolean(value) { return value === true ? 'true' : 'false' }
    return (
        <div className="debug">
            <ul aria-label="click">
                <li>count: {click.count}</li>
                <li>last: {click.last}</li>
                <li>state: {isBoolean(click.state)}</li>
                <li>timeout: {click.timeout}</li>
            </ul>
            <ul aria-label="down">
                <li>state: {isBoolean(down.state)}</li>
            </ul>
            <ul aria-label="hold">
                <li>count: {hold.count}</li>
                <li>duration: {hold.duration}</li>
                <li>last: {hold.last}</li>
                <li>state: {isBoolean(hold.state)}</li>
                <li>timeout: {hold.timeout}</li>
            </ul>
            <ul aria-label="hover">
                <li>count: {hover.count}</li>
                <li>duration: {hover.duration}</li>
                <li>last: {hover.last}</li>
                <li>state: {isBoolean(hover.state)}</li>
                <li>timeout: {hover.timeout}</li>
            </ul>
            <ul aria-label="repeat">
                <li>count: {repeat.count}</li>
                <li>duration: {repeat.duration}</li>
                <li>last: {repeat.last}</li>
                <li>state: {isBoolean(repeat.state)}</li>
                <li>timeout: {repeat.timeout}</li>
            </ul>
            <ul aria-label="up">
                <li>duration: {up.duration}</li>
                <li>last: {up.last}</li>
            </ul>
        </div>
    )
}