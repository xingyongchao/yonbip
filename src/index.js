function HelloMessage(props) {
    return (
        <div className="aaa">
            <h1>Hello World!</h1>
        </div>
    );
}

const element = <HelloMessage />;

ReactDOM.render(
    element,
    document.getElementById('app')
);