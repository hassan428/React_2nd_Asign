import { Btn } from "./button";
import { Heading } from "./heading";
import { Logo } from "./logo";
import { Text } from "./text";

const Navbar = (props) => {
  return <>
    <div className={`${props.class}  container d-flex justify-content-around fw-bolder pt-3 w-100`}>
      <div>
        <Logo />
      </div>
      <div className="d-flex gap-5">

        <Text text="Home" class="nav-text" />
        <Text text="Shop" class="nav-text" />
        <Text text="Mens" class="nav-text" />
        <Text text="Pages" class="nav-text" />
        <Text text="Blog" class="nav-text" />
        <Text text="Contact" class="nav-text" />

      </div>
      <div className="d-flex gap-3">
        <i className="nav-text fa-solid fa-cart-shopping"></i>
        <Text text="2 Items" class="nav-text" />
        <i className="nav-text fa-solid fa-magnifying-glass-arrow-right"></i>
      </div>

    </div>
  </>
};

export { Navbar };
