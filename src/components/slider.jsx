import slider_1 from '../assets/img/slider_1.jpg';
import slider_2 from '../assets/img/slider_2.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Slider = (props) => {
    return (
        <>
            <div className={`${props.class} d-flex container justify-content-between align-items-center mt-5 w-100`} >
                <div className='w-50 '>
                <img src={slider_1} height={"600px"}/>
                </div>
                <div className='fw-bolder w-50 mb-5'>
                    <Heading text="30% off" class="slider_30 fs-1" />
                    <br />
                    <Heading text="Comfort Chair" class="slider_heading" />
                    <Text text="Collect from Daxone & get 30% Discount." class="fs-5" />
                    <Btn text="SHOP NOW" class="btn text-danger border-2 border-danger" />
                </div>
            </div>
        </>
    )
}

export { Slider }