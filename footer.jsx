import { Heading } from "./heading"
import { Logo } from "./logo"
import { Text } from "./text"

const Footer = () => {
    return <>
        <div className="bg-gray-300 mt-5 p-5">
            <div className="container flex justify-between mt-5 py-5">
                <div>
                    <Logo />
                    <Text text="Follow US:" class="m-0 mt-2 p-0" />
                    <div className="flex justify-between ms-0 m-4">
                        <i className="fa-brands fa-facebook-f cursor-pointer hover:text-red-700 text-xl"></i>
                        <i className="fa-brands fa-twitter cursor-pointer hover:text-red-700 text-xl"></i>
                        <i className="fa-brands fa-vimeo-v cursor-pointer hover:text-red-700 text-xl"></i>
                        <i className="fa-brands fa-github cursor-pointer hover:text-red-700 text-xl"></i>
                    </div>
                </div>

                <div>
                    <Heading text="USEFUL LINK" class="text-2xl font-black" />
                    <Text text="Shopping Cat" class="m-0 mt-4 p-0" />
                    <Text text="Wishlist" class="m-0 mt-2 p-0" />
                    <Text text="Checkout" class="m-0 mt-2 p-0" />
                    <Text text="Support" class="m-0 mt-2 p-0" />
                </div>

                <div>
                    <Heading text="ABOUT US" class="text-2xl font-black" />
                    <Text text="About" class="m-0 mt-4 p-0" />
                    <Text text="Products" class="m-0 mt-2 p-0" />
                    <Text text="Terms and conditions" class="m-0 mt-2 p-0" />
                    <Text text="Help Center" class="m-0 mt-2 p-0" />
                </div>

                <div>
                    <Heading text="NEWSLETTER" class="text-2xl font-black" />
                    <Text text="Subscribe to get all new updates" />
                    <input type="email" placeholder="Enter your email" className="p-1 bg-gray-100 my-1 hover:bg-red-200 rounded-full  border-b border-black" />
                    <i className="fa-solid fa-magnifying-glass-arrow-right cursor-pointer hover:text-red-700 text-xl "></i>
                </div>

            </div>
        </div>

        <div className="text-center text-xl p-4 pb-3 bg-gray-400">
            <Text text="Copyright c Daxone. All Right Reserved" class="m-0 p-0" />
        </div>
    </>
}


export { Footer }