const Btn = (props) => {
    return <button type="button" className={`${props.class} cursor-pointer hover:bg-red-700 hover:text-white rounded-full ` }>{props.text}</button>
}

export { Btn }