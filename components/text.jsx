const Text = (props) => {
    return <p className={`${props.class} cursor-pointer hover:text-red-700`}>{props.text}</p>
}

export { Text }