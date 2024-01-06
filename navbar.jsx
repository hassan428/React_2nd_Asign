import { Btn } from "./button";
import { Heading } from "./heading";
import { Logo } from "./logo";
import { Text } from "./text";

const Navbar = (props) => {
  return <>
    <div className={`${props.class}  flex justify-evenly font-black pt-3 w-full bg-red-200`}>
      <div>
        <Logo />
      </div>
      <div className="flex gap-5">

        <Text text="Home" class="cursor-pointer text-xl m-auto" />
        <Text text="Shop" class="cursor-pointer text-xl m-auto" />
        <Text text="Mens" class="cursor-pointer text-xl m-auto" />
        <Text text="Pages" class="cursor-pointer text-xl m-auto" />
        <Text text="Blog" class="cursor-pointer text-xl m-auto" />
        <Text text="Contact" class="cursor-pointer text-xl m-auto" />

      </div>
      <div className="flex gap-3">
        <i className="cursor-pointer hover:text-red-700 text-xl m-auto fa-solid fa-cart-shopping"></i>
        <Text text="2 Items" class="cursor-pointer text-xl m-auto" />
        <i className="cursor-pointer hover:text-red-700 text-xl m-auto fa-solid fa-magnifying-glass-arrow-right"></i>
      </div>

    </div>
  </>
};

export { Navbar };
