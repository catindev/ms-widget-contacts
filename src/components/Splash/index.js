import React from 'react';
import './styles.css';

const titlePositionStyles = {
    '--win-height': window.screen.height / 1.5 + 'px'
}

export default ({ title }) =>
    <article className="bCallbackLayout">
        <header className="bCallbackLayout__title" style={titlePositionStyles}>
            {title}
        </header>
    </article>;