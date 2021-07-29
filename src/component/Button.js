/* I M P O R T */

/* Module */
import styled from 'styled-components';

/* Style */
import '../style/button.css';

/* S T Y L E D */

const StyledButton = styled.div`
    & .button-top {
        top: ${props =>
            props.hover.state ?
            props.down.state ? '20px' : '5px' : '0px'
        };
    }
`

/* E X P O R T */

export default function Button(props) {

    /* Variable */
    const { setAppState } = props.action;

    /* Render */
    return (
        <StyledButton
            // content
            className="button"
            // function
            onMouseDown={() => setAppState({ down: { state: true }})}
            onMouseEnter={() => setAppState({ hover: { state: true }})}
            onMouseLeave={() => setAppState({ hover: { state: false }})}
            onMouseUp={() => setAppState({ down: { state: false }})}
            // prop
            {...props}
        >
            <div className="button-top">
                <p>CLICK ME</p>
            </div>
            <div className="button-bottom" />
        </StyledButton>
    );

}