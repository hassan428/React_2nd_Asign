import banner from '../assets/img/banner.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Banner = (props) => {
    return (
        <>
            <div className={`${props.class} mt-5 pt-5 d-flex container justify-content-between align-items-center mt-5 w-100`} >
                <div>
                    <img src={banner} height={"650px"} width={"650px"} />
                </div>
                <div className='m-5 p-3'>
                    <Text text="Lorem ipsum is simply dummy text of the printing and typesetting industry." 
                    class="fs-5" />

                    <Heading text="Winter Discount" class="slider_heading m-0 p-0" />
                    <Heading text="Up to 30%" class=" fs-1 m-0 p-0" />
                    <br />
                    <Text text="It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at this layout." class="fs-5" />
                    
                    <Btn text="SHOP NOW" class="btn text-danger border-2 border-danger" />
                </div>
            </div>
        </>
    )
}

export { Banner }