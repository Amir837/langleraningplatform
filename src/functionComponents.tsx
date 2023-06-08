// 1st, Button functional component

interface ButtonProps {
    buttonName: string;
}

function Button(props: ButtonProps){
    return (<button>{props.buttonName}</button>);
}

// 2nd, Functional component with childs

interface ChildProps {
    text1: string;
    text2: string;
    children: React.ReactNode;
}

function Child(props: ChildProps){
    return (
        <div>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>{props.children}</div>
        </div>
    );
}

// export 

export {Button, Child};