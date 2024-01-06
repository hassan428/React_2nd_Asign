import React from 'react'
import { Banner } from "./banner";
import { Banner_img } from "./banner_img";
import { Slider } from "./slider";
import { Heading_text } from "./heading_text";
import { Card } from "./card";
import card_img1 from "../assets/img/product_1.jpg";
import card_img2 from "../assets/img/product_2.jpg";
import card_img3 from "../assets/img/product_3.jpg";
import card_img4 from "../assets/img/product_4.jpg";
import card_img5 from "../assets/img/product_5.jpg";
import card_img6 from "../assets/img/product_6.jpg";
import card_img7 from "../assets/img/product_7.jpg";
import card_img8 from "../assets/img/product_8.jpg";
import { useState } from 'react';

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


// const All_card = (props) => {
//     return <>
//         <div className="container grid grid-cols-2 md:grid-cols-4 m-auto mt-5 space-x-4 " >
//             {card_arr.map((obj) => {
//                 const { img, name, text, price } = obj
//                 return <Card src={img} width="100%" class="text-2xl"
//                     card_name={name} name_class=" m-0 p-0"
//                     card_text={text} text_class="font-bold m-0 p-0"
//                     price={price} price_class="font-black m-0 p-0" />
//             })}
//         </div>
//     </>
// }



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


// const All_card_2 = (props) => {

//     return <>
//         <div onClick={props.onClick} className="container grid grid-cols-2 md:grid-cols-4 m-auto mt-5 space-x-4 " >
//             {card_arr_2.map((obj) => {
//                 const { img, name, text, price } = obj

//                 return <Card show_data={show_detail_card} src={img} width="100%" class="text-2xl"
//                     card_name={name} name_class=" m-0 p-0"
//                     card_text={text} text_class="font-bold m-0 p-0"
//                     price={price} price_class="font-black m-0 p-0" />
//             })}
//         </div>
//     </>
// }


const Card_details = () => {
    const [current_data, set_current_data] = useState(null)
    const show_detail_card = (data) => {
        console.log(data)
        set_current_data(data)
    }


    return current_data ? (<div>
        <h1>{current_data.price}</h1>
    </div>) :
        (<>
            <Slider />
            <Banner_img />
            <Heading_text class="container text-center m-auto w-1/2 my-16  "
                heading="Best Sell" text="Lorem ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem ipsum has been the industry's 
      standard dummy text" />

            {/*================== Card================== */}

            <div className="container grid grid-cols-2 md:grid-cols-4 m-auto mt-5 space-x-4 " >
                {card_arr.map((obj, index) => {
                    const { img, name, text, price } = obj
                    return <Card show_data={() => show_detail_card(obj)}
                        key={index} src={img} width="100%" class="text-2xl"
                        card_name={name} name_class=" m-0 p-0"
                        card_text={text} text_class="font-bold m-0 p-0"
                        price={price} price_class="font-black m-0 p-0" />
                })}
            </div>
            <Banner />
            <Heading_text class="container text-center m-auto w-1/2 my-10  "
                heading="All Products" text="Lorem ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem ipsum has been the industry's 
      standard dummy text" />

            {/*================== Card================== */}
            <div className="container grid grid-cols-2 md:grid-cols-4 m-auto mt-5 space-x-4 " >
                {card_arr_2.map((obj, index) => {
                    const { img, name, text, price } = obj
                    return <Card show_data={() => show_detail_card(obj)} 
                    key={index} src={img} width="100%" class="text-2xl"
                        card_name={name} name_class=" m-0 p-0"
                        card_text={text} text_class="font-bold m-0 p-0"
                        price={price} price_class="font-black m-0 p-0" />
                })}
            </div>
        </>


        )
}

export { Card_details }