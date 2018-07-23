'use strict';

var appRoot = document.getElementById("app");

var hidden = true;

var onDetailsClick = function onDetailsClick() {
    hidden = !hidden;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toogle'
        ),
        React.createElement(
            'button',
            { onClick: onDetailsClick },
            !hidden ? 'Hide details' : 'Show details'
        ),
        !hidden && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Details 1'
            )
        ),
        React.createElement(
            'p',
            { hidden: hidden },
            'Details 2'
        )
    );
    ReactDOM.render(jsx, appRoot);
};

render();
