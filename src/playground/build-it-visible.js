class VisibilityToogle extends React.Component {
    constructor(props) {
        super(props);
        this.toogleVisibility = this.toogleVisibility.bind(this);
        this.state = { 
            visibility: false
        }
    }
    toogleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }    
    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.toogleVisibility}>
                   {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>
                            Details
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));

/*

const appRoot = document.getElementById("app");

let visibility = true;

const toogleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={toogleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>
                        Details
                    </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};

render();

*/