import banner from '../assets/img/banner.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Banner = (props) => {
    return (
        <>
            <div className={`${props.class}  flex container justify-between items-center my-10 mx-5 w-100`} >
                <div>
                    <img src={banner} height={"650px"} width={"650px"} />
                </div>
                <div className='m-5 p-3'>
                    <Text text="Lorem ipsum is simply dummy text of the printing and typesetting industry." 
                    class="text-xl" />

                    <Heading text="Winter Discount" class="text-5xl my-2 p-0" />
                    <Heading text="Up to 30%" class=" text-5xl m-0 p-0" />
                    <br />
                    <Text text="It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at this layout." class="text-xl" />
                    
                    <Btn text="SHOP NOW" class="hover:px-3 my-1" />
                </div>
            </div>
        </>
    )
}

export { Banner }