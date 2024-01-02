import { Heading } from "./heading"
import { Logo } from "./logo"
import { Text } from "./text"

const Footer = () => {
    return <>
        <div className="footer_bg mt-5 p-5">
            <div className="container d-flex justify-content-between mt-5 pt-5 pb-5">
                <div>
                    <Logo />
                    <Text text="Follow US:" class="m-0 mt-2 p-0" />
                    <div className="d-flex justify-content-between ms-0 m-4">
                        <i className="fa-brands fa-facebook-f color"></i>
                        <i className="fa-brands fa-twitter color"></i>
                        <i className="fa-brands fa-vimeo-v color"></i>
                        <i className="fa-brands fa-github color"></i>
                    </div>
                </div>

                <div>
                    <Heading text="USEFUL LINK" class="fs-4 fw-bolder" />
                    <Text text="Shopping Cat" class="m-0 mt-4 p-0" />
                    <Text text="Wishlist" class="m-0 mt-2 p-0" />
                    <Text text="Checkout" class="m-0 mt-2 p-0" />
                    <Text text="Support" class="m-0 mt-2 p-0" />
                </div>

                <div>
                    <Heading text="ABOUT US" class="fs-4 fw-bolder" />
                    <Text text="About" class="m-0 mt-4 p-0" />
                    <Text text="Products" class="m-0 mt-2 p-0" />
                    <Text text="Terms and conditions" class="m-0 mt-2 p-0" />
                    <Text text="Help Center" class="m-0 mt-2 p-0" />
                </div>

                <div>
                    <Heading text="NEWSLETTER" class="fs-4 fw-bolder" />
                    <Text text="Subscribe to get all new updates" />
                    <input type="email" placeholder="Enter your email" className="p-1 input" />
                    <i className="fa-solid fa-magnifying-glass-arrow-right color "></i>
                </div>

            </div>
        </div>

        <div className="text-center fs-5 p-4 pb-3 footer_bg_2">
            <Text text="Copyright c Daxone. All Right Reserved" class="m-0 p-0" />
        </div>
    </>
}


export { Footer }