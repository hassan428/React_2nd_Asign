import img_banner from '../assets/img/banner_img.png'


const Banner_img = (props) => {
    return (

        <>
            <div className={`${props.class} container flex justify-center  my-10 cursor-pointer`}>
            <img src={img_banner} alt="" />
            </div>
        </>
    )
}

export { Banner_img }