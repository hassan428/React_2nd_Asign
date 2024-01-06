const Heading = (props) => {
    return <h1 className={`${props.class} cursor-pointer hover:text-red-700`}>{props.text}</h1>
}
export { Heading }
