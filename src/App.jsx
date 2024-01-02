import "./App.css";
import { All_card, All_card_2 } from "./components/all_card";
import { Banner } from "./components/banner";
import { Banner_img } from "./components/banner_img";
import { Footer } from "./components/footer";
import { Heading_text } from "./components/heading_text";
import { Navbar } from "./components/navbar";
import { Slider } from "./components/slider";

const App = () => {

  return (
    <>
      <div className="nav_hero">
        <Navbar />
        <Slider />
      </div>
      <Banner_img />
      <Heading_text class="container text-center w-50 pt-5 mt-5 heading_text" 
      heading="Best Sell" text="Lorem ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem ipsum has been the industry's 
      standard dummy text" />
      <All_card />
      <Banner />
      <Heading_text class="container text-center w-50 pt-5 mt-5 heading_text" 
      heading="All Products" text="Lorem ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem ipsum has been the industry's 
      standard dummy text" />
      <All_card_2 />
      <Footer />
      
    </>
  );
};

export default App;
