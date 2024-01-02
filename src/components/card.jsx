import { Text } from "./text"


const Card = (props) => {
    return <>
    <div className={`${props.class} `}>
        <img src={props.src} width={props.width} alt="" />
        <Text text={props.card_name} class={`${props.name_class} mt-3` } />
        <Text text={props.card_text} class={`${props.text_class}`}/>
        <Text text={props.price} class={`${props.price_class}`} />
        
    </div>
    </>
}

export { Card }