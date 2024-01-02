import { Heading } from "./heading"
import { Text } from "./text"

const Heading_text = (props) => {
    return <>
    <div className={props.class}>
        <Heading text={props.heading} class="fs-2" />
        <Text text={props.text} />
    </div>
    </>
}

export { Heading_text }