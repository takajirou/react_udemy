const Hello = (props) => {
    // props.name = "Bob";
    console.log(props.name);
    return (
        <div>
            <h3>Hello {props.name}</h3>
        </div>
    );
};

export default Hello;
