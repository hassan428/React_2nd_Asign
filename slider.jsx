import slider_1 from '../assets/img/slider_1.jpg';
import slider_2 from '../assets/img/slider_2.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Slider = (props) => {
    return (
        <>
            <div className={`${props.class} flex justify-between items-center pt-20 w-full bg-red-200`} >
                <div className='w-1/2 '>
                <img src={slider_1} height={"600px"}/>
                </div>
                <div className='font-black w-1/2 mb-5'>
                    <Heading text="30% off" class="font-serif italic text-red-800 text-8xl" />
                    <br />
                    <Heading text="Comfort Chair" class="text-5xl" />
                    <Text text="Collect from Daxone & get 30% Discount." class="text-2xl" />
                    <Btn text="SHOP NOW" class="hover:px-3 my-1" />
                </div>
            </div>
        </>
    )
}

export { Slider }