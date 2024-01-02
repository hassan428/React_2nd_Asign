import { Card } from "./card";
import card_img1 from "../assets/img/product_1.jpg";
import card_img2 from "../assets/img/product_2.jpg";
import card_img3 from "../assets/img/product_3.jpg";
import card_img4 from "../assets/img/product_4.jpg";
import card_img5 from "../assets/img/product_5.jpg";
import card_img6 from "../assets/img/product_6.jpg";
import card_img7 from "../assets/img/product_7.jpg";
import card_img8 from "../assets/img/product_8.jpg";

let card_arr = [
    {
        img: card_img1,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$210.00"
    },
    {
        img: card_img2,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: `$210.00`
    },
    {
        img: card_img3,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$250.00"
    },
    {
        img: card_img4,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$320.00"
    }
]

const All_card = (props) => {

    return <>
        <div className="container row m-auto mt-5 fs-5" >
            {card_arr.map((obj) => {
                const { img, name, text, price } = obj

                return <Card src={img} width="100%" class="col-md-3 mt-5"
                    card_name={name} name_class=" m-0 p-0"
                    card_text={text} text_class="text-black m-0 p-0"
                    price={price} price_class="fw-bolder m-0 p-0" />
            })}
        </div>
    </>
}



let card_arr_2 = [
    ...card_arr,
    {
        img: card_img5,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$250.00"
    },
    {
        img: card_img6,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: `$260.00`
    },
    {
        img: card_img7,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$240.00"
    },
    {
        img: card_img8,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$280.00"
    }
]


const All_card_2 = () => {

    return <div className="container row m-auto mt-5 fs-5" >
        {card_arr_2.map((obj) => {
            const { img, name, price, text } = obj
            return <Card src={img} width="100%" class="col-md-3 mt-5"
                card_name={name} name_class=" m-0 p-0"
                card_text={text} text_class="text-black m-0 p-0"
                price={price} price_class="fw-bolder m-0 p-0" />
        })}
    </div>
}


export { All_card, All_card_2 }