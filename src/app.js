console.log('App.js is running');

const app = {
    title: "Title",
    subtitle: "Subtitle",
    options: [
        'One',
        'Two'
    ]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form action="">
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);