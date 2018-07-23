const appRoot = document.getElementById("app");

let hidden = true;

const onDetailsClick = () => {
    hidden = !hidden;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={onDetailsClick}>{!hidden ? 'Hide details' : 'Show details'}</button>
            {}
            {!hidden && (
                <div>
                    <p>
                        Details 1
                    </p>
                </div>
            )}
            <p hidden={hidden}>Details 2</p>
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};

render();