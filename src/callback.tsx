function Parrent() {
    const callback = (str: string) => {
        console.log("callback");
        console.log(str);
    };

    return (
        <Child callback={callback} />
    )
}

function Child({ callback }: { callback: (str: string) => void }) {
    return (
        <div>
            <button onClick={callback.bind(null, "hahaha")}>Click me</button>
        </div>
    );
}

export { Parrent };