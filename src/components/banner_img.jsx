import img_banner from '../assets/img/banner_img.png'


const Banner_img = (props) => {
    return (

        <>
            <div className={`${props.class} container text-center mt-5 banner_img`}>
            <img src={img_banner} alt="" />
            </div>
        </>
    )
}

export { Banner_img }